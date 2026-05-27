import { useRouter } from "expo-router"
import { useState } from "react"
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { Image } from "expo-image"
import { SafeAreaView } from "react-native-safe-area-context"

import EyeIcon from "../../assets/eye-line.svg"
import { Button } from "@/components/ui/Button"
import { TextField } from "@/components/ui/TextField"
import { appRoutes } from "@/constants/appRoutes"
import { authRoutes } from "@/constants/authRoutes"
import { colors, typography } from "@/theme"

export default function LoginScreen() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [passwordError, setPasswordError] = useState<string | undefined>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isFormValid = email.trim().length > 0 && password.trim().length > 0

  const handleSignIn = () => {
    if (!isFormValid || isSubmitting) {
      return
    }

    setPasswordError(undefined)
    setIsSubmitting(true)

    // TODO: wire up auth API — setPasswordError(LOGIN_ERROR) on failure
    router.replace(appRoutes.home)
    setIsSubmitting(false)
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.flex}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Image
              source={require("../../assets/verxa_logo.png")}
              style={styles.logo}
              contentFit="contain"
            />

            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
              Sign in to continue to your account
            </Text>
          </View>

          <View style={styles.form}>
            <TextField
              label="Email Address"
              placeholder="Enter your email address"
              value={email}
              onChangeText={(value) => {
                setEmail(value)
                if (passwordError) {
                  setPasswordError(undefined)
                }
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              textContentType="emailAddress"
            />

            <View style={styles.passwordGroup}>
              <TextField
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={(value) => {
                  setPassword(value)
                  if (passwordError) {
                    setPasswordError(undefined)
                  }
                }}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoComplete="password"
                textContentType="password"
                error={passwordError}
                rightIcon={<EyeIcon width={20} height={20} />}
                onRightIconPress={() => setShowPassword((current) => !current)}
              />

              <Pressable
                accessibilityRole="link"
                onPress={() => router.push(authRoutes.forgotPassword)}
                style={styles.forgotPassword}
              >
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.footer}>
            <Button
              title="Sign In"
              variant="primary"
              size="lg"
              fullWidth
              disabled={!isFormValid}
              loading={isSubmitting}
              onPress={handleSignIn}
            />

            <Pressable
              accessibilityRole="link"
              onPress={() => router.push("/(auth)/register")}
              style={styles.signUpRow}
            >
              <Text style={styles.signUpPrompt}>
                Don&apos;t have an account?{" "}
              </Text>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background.app,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
  },
  header: {
    alignItems: "center",
    gap: 8,
    marginBottom: 32,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
  title: {
    fontFamily: typography.title.h5.fontFamily,
    fontSize: typography.title.h5.fontSize,
    fontWeight: typography.title.h5.fontWeight,
    lineHeight: typography.title.h5.lineHeight,
    color: typography.title.h5.color,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: typography.label.medium.fontFamily,
    fontSize: typography.label.medium.fontSize,
    fontWeight: typography.label.medium.fontWeight,
    lineHeight: typography.label.medium.lineHeight,
    letterSpacing: typography.label.medium.letterSpacing,
    color: colors.text.soft400,
    textAlign: "center",
  },
  form: {
    gap: 16,
  },
  passwordGroup: {
    gap: 8,
  },
  forgotPassword: {
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    fontFamily: typography.paragraph.link.fontFamily,
    fontSize: typography.paragraph.link.fontSize,
    fontWeight: typography.paragraph.link.fontWeight,
    lineHeight: typography.paragraph.link.lineHeight,
    letterSpacing: typography.paragraph.link.letterSpacing,
    color: typography.paragraph.link.color,
  },
  footer: {
    marginTop: "auto",
    paddingTop: 32,
    gap: 24,
  },
  signUpRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpPrompt: {
    fontFamily: typography.label.small.fontFamily,
    fontSize: typography.label.small.fontSize,
    fontWeight: typography.label.small.fontWeight,
    lineHeight: typography.label.small.lineHeight,
    letterSpacing: typography.label.small.letterSpacing,
    color: colors.holly[300],
  },
  signUpLink: {
    fontFamily: typography.label.small.fontFamily,
    fontSize: typography.label.small.fontSize,
    fontWeight: typography.label.small.fontWeight,
    lineHeight: typography.label.small.lineHeight,
    letterSpacing: typography.label.small.letterSpacing,
    color: colors.primary.base,
  },
})
