import { Pressable, StyleSheet, TextInput, View } from "react-native"

import SearchIcon from "../../../assets/home/search-line.svg"
import { colors, transactions, typography } from "@/theme"

type TransactionSearchBarProps = {
  value?: string
  onChangeText?: (text: string) => void
  placeholder?: string
}

export function TransactionSearchBar({
  value,
  onChangeText,
  placeholder = "Search transactions...",
}: TransactionSearchBarProps) {
  const config = transactions.search

  return (
    <View style={styles.container}>
      <SearchIcon
        width={config.iconSize}
        height={config.iconSize}
        color={config.iconColor}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text.placeholder}
        style={styles.input}
      />
    </View>
  )
}

const config = transactions.search

const styles = StyleSheet.create({
  container: {
    height: config.height,
    flexDirection: "row",
    alignItems: "center",
    gap: config.gap,
    alignSelf: "stretch",
    borderRadius: config.borderRadius,
    borderWidth: 1,
    borderColor: config.borderColor,
    backgroundColor: config.backgroundColor,
    paddingTop: config.padding.top,
    paddingRight: config.padding.right,
    paddingBottom: config.padding.bottom,
    paddingLeft: config.padding.left,
    ...config.shadow,
  },
  input: {
    flex: 1,
    padding: 0,
    fontFamily: typography.paragraph.input.fontFamily,
    fontSize: typography.paragraph.input.fontSize,
    fontWeight: typography.paragraph.input.fontWeight,
    lineHeight: typography.paragraph.input.lineHeight,
    letterSpacing: typography.paragraph.input.letterSpacing,
    color: typography.paragraph.input.color,
  },
})
