import AuthLayout from '@/features/auth/components/auth-layout';
import { ThemeProvider } from '@/components/theme-provider';

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AuthLayout>{children}</AuthLayout>;
    </ThemeProvider>
  );
}
