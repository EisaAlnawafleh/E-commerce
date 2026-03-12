"use client";
import Link from "next/link";
const SignUp = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#2b0f5c_0%,#1a0b45_40%,#0f062b_100%)] flex items-center justify-center px-4">
      <div className="absolute top-16 left-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-600 animate-bounce blur-[2px]" />
      <div className="absolute top-28 right-20 w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-600 animate-pulse blur-[2px]" />
      <div className="absolute bottom-20 left-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-500 animate-bounce blur-[2px]" />
      <div className="absolute bottom-10 right-16 w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 animate-pulse blur-[2px]" />

      <div className="relative z-10 w-full max-w-[95%] sm:max-w-[420px]">
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.4)]">
          <h1 className="text-white text-3xl font-semibold text-center mb-8">
            أنشئ حسابك
          </h1>

          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="الاسم الأول"
              className="h-12 rounded-xl bg-white/15 border focus:shadow-[0_0_15px_rgba(217,70,239,0.35)] border-white/10 px-4 transition-all duration-300 text-white placeholder:text-white/50 outline-none focus:border-fuchsia-400"
            />
            <input
              type="text"
              placeholder="اسم العائلة"
              className="h-12 rounded-xl bg-white/15 border focus:shadow-[0_0_15px_rgba(217,70,239,0.35)] border-white/10 px-4 transition-all duration-300 text-white placeholder:text-white/50 outline-none focus:border-fuchsia-400"
            />

            <input
              type="email"
              placeholder="بريد إلكتروني"
              className="h-12 rounded-xl bg-white/15 border focus:shadow-[0_0_15px_rgba(217,70,239,0.35)] border-white/10 px-4 transition-all duration-300 text-white placeholder:text-white/50 outline-none focus:border-fuchsia-400"
            />

            <input
              type="password"
              placeholder="كلمة المرور"
              className="h-12 rounded-xl bg-white/15 border focus:shadow-[0_0_15px_rgba(217,70,239,0.35)] border-white/10 px-4 transition-all duration-300 text-white placeholder:text-white/50 outline-none focus:border-fuchsia-400"
            />

            <input
              type="password"
              placeholder="تأكيد كلمة المرور"
              className="h-12 rounded-xl bg-white/15 border focus:shadow-[0_0_15px_rgba(217,70,239,0.35)] border-white/10 px-4 transition-all duration-300 text-white placeholder:text-white/50 outline-none focus:border-fuchsia-400"
            />

            <button className="h-12 rounded-xl bg-gradient-to-r  from-fuchsia-600 to-purple-600 text-white font-medium text-lg hover:from-fuchsia-500 hover:to-purple-500 transition">
              إنشاء حساب
            </button>
          </form>

          <div className="text-center text-white/70 justify-center items-center flex flex-row gap-2 text-sm mt-6">
            <Link href="/auth/login">
              <div className="text-fuchsia-300 cursor-pointer hover:underline">
                تسجيل الدخول
              </div>
            </Link>
            هل لديك حساب بالفعل؟
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
