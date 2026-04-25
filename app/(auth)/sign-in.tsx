import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const SignIn = () => {
    return (
        <View>
            <Text>SignIn</Text>
            <Link href="/(auth)/sign-up">Create Account</Link>
            <Link href="../(tabs)/index">Index</Link>
        </View>
    )
}

export default SignIn