"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#2b0f5c_0%,#1a0b45_40%,#0f062b_100%)] flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="absolute inset-0">
        <div className="absolute top-[8%] left-[10%] w-32 h-32 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[8%] right-[10%] w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-[30%] right-[20%] w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="absolute top-10 left-6 w-12 h-12 sm:top-16 sm:left-10 sm:w-16 sm:h-16 md:top-20 md:left-20 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-fuchsia-300 to-purple-500 shadow-[0_0_60px_rgba(224,86,253,0.35)] animate-bounce" />

      <div className="absolute top-16 right-8 w-20 h-20 sm:top-20 sm:right-14 sm:w-28 sm:h-28 md:top-24 md:right-24 md:w-32 md:h-32 lg:top-28 lg:right-52 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-pink-300 to-fuchsia-500 shadow-[0_0_80px_rgba(192,63,217,0.35)] animate-pulse" />

      <div className="absolute bottom-16 left-6 w-14 h-14 sm:bottom-20 sm:left-12 sm:w-20 sm:h-20 md:bottom-24 md:left-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-fuchsia-300 to-purple-500 shadow-[0_0_70px_rgba(192,63,217,0.35)] animate-bounce" />

      <div className="absolute bottom-10 right-6 w-24 h-24 sm:bottom-12 sm:right-10 sm:w-32 sm:h-32 md:bottom-14 md:right-16 md:w-40 md:h-40 lg:bottom-16 lg:right-24 lg:w-52 lg:h-52 rounded-full bg-gradient-to-br from-pink-300 to-fuchsia-500 shadow-[0_0_100px_rgba(224,86,253,0.35)] animate-pulse" />

      <div className="absolute top-[42%] left-[2%] hidden sm:block sm:w-24 sm:h-24 md:w-32 md:h-32 lg:left-[8%] lg:w-44 lg:h-44 rounded-full bg-gradient-to-br from-fuchsia-300 to-purple-500 shadow-[0_0_90px_rgba(192,63,217,0.3)] animate-pulse" />

      <div className="absolute top-[38%] right-[2%] hidden sm:block sm:w-24 sm:h-24 md:w-32 md:h-32 lg:right-[8%] lg:w-44 lg:h-44 rounded-full bg-gradient-to-br from-pink-300 to-fuchsia-500 shadow-[0_0_90px_rgba(224,86,253,0.3)] animate-bounce" />

      <div className="relative z-10 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[760px]">
        <div className="relative mx-auto flex min-h-[420px] sm:min-h-[500px] md:min-h-[560px] lg:min-h-[620px] w-full items-center justify-center rounded-[32px] sm:rounded-[60px] md:rounded-[120px] lg:rounded-[45%] border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.25)] px-4 py-8 sm:px-6 md:px-8">
          <div className="pointer-events-none absolute inset-0 rounded-[32px] sm:rounded-[60px] md:rounded-[120px] lg:rounded-[45%] bg-[radial-gradient(circle_at_20%_30%,rgba(224,86,253,0.22),transparent_22%),radial-gradient(circle_at_75%_20%,rgba(232,121,249,0.20),transparent_18%),radial-gradient(circle_at_75%_80%,rgba(192,63,217,0.18),transparent_20%)]" />

          <div className="relative z-10 w-full max-w-[410px]  ">
            <h1 className="mb-6 sm:mb-8 text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-snug">
              قم بتسجيل الدخول إلى حسابك
            </h1>

            <form className="space-y-4 sm:space-y-5">
              <input
                type="email"
                placeholder="بريد إلكتروني"
                className="h-12 sm:h-13 md:h-14 w-full rounded-xl focus:shadow-[0_0_15px_rgba(217,70,239,0.35)] sm:rounded-2xl border border-white/10 bg-white/15 px-4 sm:px-5 text-sm sm:text-base text-white placeholder:text-white/50 outline-none transition-all duration-300 focus:border-fuchsia-400/60 focus:bg-white/20"
              />

              <input
                type="password"
                placeholder="كلمة المرور"
                className="h-12 sm:h-13 md:h-14 w-full focus:shadow-[0_0_15px_rgba(217,70,239,0.35)] rounded-xl sm:rounded-2xl border border-white/10 bg-white/15 px-4 sm:px-5 text-sm sm:text-base text-white placeholder:text-white/50 outline-none transition-all duration-300 focus:border-fuchsia-400/60 focus:bg-white/20"
              />

              <button
                type="submit"
                className="h-12 sm:h-13 md:h-14 w-full rounded-xl cursor-pointer sm:rounded-2xl bg-gradient-to-r from-fuchsia-600 to-purple-600 text-base sm:text-lg md:text-xl font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:from-fuchsia-500 hover:to-purple-500 active:scale-[0.99]"
              >
                متابعة
              </button>
            </form>

            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center sm:gap-2 text-xs sm:text-sm text-white/75">
              <Link href="/auth/signup">
                <button className="font-semibold text-white cursor-pointer transition hover:text-fuchsia-300">
                  إنشاء حساب
                </button>
              </Link>

              <button className="">ليس لديك حساب؟</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
