import AppHeader from '@/components/app-header';

export default async function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <AppHeader />
      <div className="flex-1 flex items-center justify-center p-4">{children}</div>
    </>
  );
}
