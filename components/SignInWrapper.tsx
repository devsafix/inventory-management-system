"use client";

import { useEffect } from "react";

export default function SignInWrapper() {
  useEffect(() => {
    // Pre-fill form fields when component mounts
    const emailInput = document.querySelector(
      'input[type="email"]'
    ) as HTMLInputElement;
    const passwordInput = document.querySelector(
      'input[type="password"]'
    ) as HTMLInputElement;

    if (emailInput && passwordInput) {
      emailInput.value =
        process.env.NEXT_PUBLIC_DEMO_EMAIL || "demouser@gmail.com";
      passwordInput.value =
        process.env.NEXT_PUBLIC_DEMO_PASSWORD || "demouser@";
    }
  }, []);

  return (
    <div >
      <div className="w-full max-w-xl">
        {/* Demo Banner */}
        <div className="mb-6 bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-4">
          <div className="text-center">
            <h3 className="text-sm font-bold text-slate-900 mb-2">
              Quick Access
            </h3>
            <div className="bg-white rounded-lg p-3 border border-indigo-200">
              <p className="text-sm font-mono text-slate-700">
                <strong>Email:</strong> {process.env.NEXT_PUBLIC_DEMO_EMAIL}
              </p>
              <p className="text-sm font-mono text-slate-700">
                <strong>Password:</strong>{" "}
                {process.env.NEXT_PUBLIC_DEMO_PASSWORD}
              </p>
            </div>
            <p className="text-xs text-slate-600 mt-2">
              Credentials are pre-filled below
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
