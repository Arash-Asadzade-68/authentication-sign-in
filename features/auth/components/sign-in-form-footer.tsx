import { SIGN_IN_URL } from '@/constants/URLS';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function SignInFormFooter() {
  const t = useTranslations();

  return (
    <div className="mt-8 pt-4 border-t border-(--border-color) text-center">
      <div className="text-[10px] text-(--text-secondary) leading-relaxed">
        {t.rich('signIn.footer', {
          termsOfService: (chunks) => (
            <Link href={SIGN_IN_URL} className="underline hover:text-(--text-primary)">
              {chunks}
            </Link>
          ),
          privacyPolicy: (chunks) => (
            <Link href={SIGN_IN_URL} className="underline hover:text-(--text-primary)">
              {chunks}
            </Link>
          ),
        })}
      </div>
    </div>
  );
}
