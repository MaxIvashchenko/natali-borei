"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ADMIN_USER = "admin";
const ADMIN_PASS = "nb2024";

const CornerSvg = () => (
  <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
    <path d="M2 38 L2 2 L38 2" stroke="#B8963E" strokeWidth="1" />
  </svg>
);

export default function AdminLoginPage() {
  const router = useRouter();
  const [shake, setShake] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const userRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (localStorage.getItem("nb-admin-auth")) {
      router.replace("/admin");
      return;
    }
    const t = setTimeout(() => userRef.current?.focus(), 200);
    return () => clearTimeout(t);
  }, [router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const u = (
      form.elements.namedItem("username") as HTMLInputElement
    ).value.trim();
    const p = (form.elements.namedItem("password") as HTMLInputElement).value;

    if (u === ADMIN_USER && p === ADMIN_PASS) {
      const token = btoa(
        "nb-" + Date.now() + "-" + Math.random().toString(36).slice(2),
      );
      localStorage.setItem("nb-admin-auth", token);
      setTimeout(() => router.replace("/admin"), 400);
    } else {
      setShake(true);
      const passInput = form.elements.namedItem("password") as HTMLInputElement;
      passInput.value = "";
      passInput.focus();
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <main className="login-page" data-screen-label="Admin Login">
      <section className={`login-card${shake ? " shake" : ""}`}>
        <span className="corner corner--tl">
          <CornerSvg />
        </span>
        <span className="corner corner--tr">
          <CornerSvg />
        </span>
        <span className="corner corner--bl">
          <CornerSvg />
        </span>
        <span className="corner corner--br">
          <CornerSvg />
        </span>

        <header className="login-card__brand">
          <Image
            className="login-card__logo"
            src="/logo-monogram.png"
            alt="Natali Borei"
            width={60}
            height={60}
            priority
          />
          <p className="login-card__sub">Atelier Dashboard</p>
          <h1 className="login-card__title">Sign In</h1>
          <hr className="gold-line" />
        </header>

        <form
          className="login-form"
          onSubmit={handleSubmit}
          autoComplete="off"
          noValidate
        >
          <div className="field">
            <label htmlFor="loginUser">Username</label>
            <input
              id="loginUser"
              ref={userRef}
              name="username"
              type="text"
              required
              autoComplete="username"
            />
          </div>

          <div className="field login-field--pass">
            <label htmlFor="loginPass">Password</label>
            <input
              id="loginPass"
              name="password"
              type={showPass ? "text" : "password"}
              required
              autoComplete="current-password"
            />
            <button
              className="pw-toggle"
              type="button"
              aria-label={showPass ? "Hide password" : "Show password"}
              onClick={() => setShowPass((s) => !s)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M2 11s3-6 9-6 9 6 9 6-3 6-9 6-9-6-9-6z" />
                <circle cx="11" cy="11" r="3" />
                {showPass && <path d="M3 3l16 16" strokeLinecap="round" />}
              </svg>
            </button>
          </div>

          <button
            className="gold-btn gold-btn--filled login-submit"
            type="submit"
          >
            Sign In
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path d="M1 5h12M9 1l4 4-4 4" />
            </svg>
          </button>

          <p className="login-hint">
            Demo credentials &nbsp;·&nbsp; <b>admin</b> &nbsp;/&nbsp;{" "}
            <b>nb2024</b>
          </p>
        </form>
      </section>
    </main>
  );
}
