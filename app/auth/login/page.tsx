import { login } from "@/actions/authAction";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto flex h-[50vh] flex-col items-center justify-center px-6 py-8 md:h-[70vh]">
        <div className="w-full bg-white sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4">
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border-b border-black pb-2 text-sm text-black placeholder-black focus:outline-none"
                  placeholder="아이디"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="비밀번호"
                  className="w-full border-b border-black pb-2 text-sm text-black placeholder-black focus:outline-none"
                  required
                />
              </div>
              <button
                formAction={login}
                className="w-full border border-black py-4 text-center text-base font-normal text-black"
              >
                로그인
              </button>
            </form>
            <div className="flex items-center justify-start gap-4">
              {/* <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div> */}
              {/* <a
                href="#"
                className="text-sm font-normal text-black hover:text-gray-500"
              >
                아이디 찾기
              </a> */}
              <Link
                href="/auth/password-reset"
                className="text-sm font-normal text-black hover:text-gray-500"
              >
                비밀번호 찾기
              </Link>
            </div>
            <div className="flex items-center justify-start gap-4">
              <p className="text-sm font-light text-gray-500">
                Don&apos;t have an account yet?
              </p>
              <Link
                href={"/auth/signup"}
                className="text-sm text-black hover:underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
