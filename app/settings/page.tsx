import Sidebar from "@/components/Side-bar";
import { AccountSettings } from "@stackframe/stack";

export default async function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/settings" />

      <main className="md:ml-64 md:p-8 p-3 mt-16 md:mt-0">
        <div className="mb-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Settings
              </h1>
              <p className="text-slate-600">
                Manage your account settings and preferences.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <AccountSettings fullPage />
          </div>
        </div>
      </main>
    </div>
  );
}
