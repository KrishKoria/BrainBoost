import LandingPage from "@/components/LandingPage";
import NonDashboardNavbar from "@/components/NonDashboardNavbar";

export default function Home() {
  return <div className="nondashboard-layout">
    <NonDashboardNavbar />
    <main className="nondashboard-layout__main">
      <LandingPage/>
    </main>
  </div>
}
