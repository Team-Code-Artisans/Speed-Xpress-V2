import { useAuth } from "@/hooks/useAuth";
import Loading from "@/ui/Loading";
import { redirect } from "next/navigation";

const DashboardHomePage = () => {
  const { role, loading } = useAuth();

  if (loading) {
    return (
      <div className="grid place-items-center h-screen">
        <Loading size="lg" />
      </div>
    );
  }

  if (role) {
    redirect(`/dashboard/${role}`);
  }
};

export default DashboardHomePage;
