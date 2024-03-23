import { signup } from "@/actions/auth-action";

export default function SignupPage() {
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
                formAction={signup}
                className="w-full border border-black py-4 text-center text-base font-normal text-black"
              >
                가입하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
