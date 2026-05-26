import { useRef } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
  type NativeSyntheticEvent,
  type TextInputKeyPressEventData,
} from 'react-native';

import { input as inputTokens, typography } from '@/theme';

type DigitInputProps = {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
};

export function DigitInput({
  length = 6,
  value,
  onChange,
  autoFocus = false,
}: DigitInputProps) {
  const { width: screenWidth } = useWindowDimensions();
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const cellIndexes = Array.from({ length }, (_, index) => index);

  const horizontalPadding = 40;
  const gapTotal = inputTokens.digit.gap * (length - 1);
  const cellSize = Math.min(
    inputTokens.digit.size,
    (screenWidth - horizontalPadding - gapTotal) / length,
  );

  const focusCell = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  const updateValue = (nextValue: string) => {
    onChange(nextValue.slice(0, length));
  };

  const handleChange = (text: string, index: number) => {
    const sanitized = text.replace(/\D/g, '');

    if (sanitized.length > 1) {
      const pasted = `${value.slice(0, index)}${sanitized}`.slice(0, length);
      updateValue(pasted);
      focusCell(Math.min(pasted.length, length - 1));
      return;
    }

    const nextDigits = value.split('');
    while (nextDigits.length < length) {
      nextDigits.push('');
    }
    nextDigits[index] = sanitized;
    const nextValue = nextDigits.join('').slice(0, length);
    updateValue(nextValue);

    if (sanitized && index < length - 1) {
      focusCell(index + 1);
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (event.nativeEvent.key !== 'Backspace') {
      return;
    }

    const currentDigit = value[index];

    if (!currentDigit && index > 0) {
      const nextDigits = value.split('');
      while (nextDigits.length < length) {
        nextDigits.push('');
      }
      nextDigits[index - 1] = '';
      updateValue(nextDigits.join(''));
      focusCell(index - 1);
    }
  };

  return (
    <View style={[styles.row, { gap: inputTokens.digit.gap }]}>
      {cellIndexes.map((index) => {
        const displayDigit = value[index] ?? '';

        return (
          <Pressable
            key={index}
            onPress={() => focusCell(index)}
            style={[
              styles.cell,
              {
                width: cellSize,
                height: cellSize,
                borderRadius: inputTokens.digit.borderRadius,
              },
            ]}
          >
            <Text style={styles.cellText}>{displayDigit}</Text>

            <TextInput
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
              value={displayDigit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(event) => handleKeyPress(event, index)}
              keyboardType="number-pad"
              maxLength={length}
              autoFocus={autoFocus && index === 0}
              caretHidden
              selectTextOnFocus
              textContentType="oneTimeCode"
              style={styles.hiddenInput}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: inputTokens.digit.borderColor,
    backgroundColor: inputTokens.digit.backgroundColor,
    paddingVertical: inputTokens.digit.padding.vertical,
    paddingHorizontal: inputTokens.digit.padding.horizontal,
    ...inputTokens.shadow,
  },
  cellText: {
    fontFamily: typography.paragraph.input.fontFamily,
    fontSize: typography.paragraph.input.fontSize,
    fontWeight: typography.paragraph.input.fontWeight,
    lineHeight: typography.paragraph.input.lineHeight,
    letterSpacing: typography.paragraph.input.letterSpacing,
    color: typography.paragraph.input.color,
    textAlign: 'center',
  },
  hiddenInput: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0,
  },
});
