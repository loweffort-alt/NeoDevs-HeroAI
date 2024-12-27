import FormLogin from "@/components/form-login"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const LoginPage = () => {
  return (
    <div className="flex flex-col m-auto items-center justify-center h-screen">
      <div className="grid items-center h-96 font-4 border">
        <FormLogin />
      </div>
      <div>
        <p>{"Don't have an account?"}
          <Button variant="link" className="text-foreground">
            <Link href="/register">
              Sign up
            </Link>
          </Button>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
