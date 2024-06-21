import Other from "../../../components/Other";
import OtherMobile from "../../../components/OtherMobile";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex w-screen h-screen top-20 text-slate-300  ">
       <Other/>
       <OtherMobile/>
      <div className=" h-screen mt-20 w-screen overflow-auto">
        {children}
      </div>
    </div>
  );
}
