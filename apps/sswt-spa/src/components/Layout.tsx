export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</main>
    </>
  );
}
