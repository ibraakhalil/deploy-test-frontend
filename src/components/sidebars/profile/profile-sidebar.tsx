import { ProfileNavigationMenu } from "@/components/sidebars/profile/profile-nav-menu";

export function ProfileSidebar() {
  return (
    <div className="flex flex-col gap-4 pe-[--gap-end] ps-[--gap-start]">
      {/* <UserProfileCard /> */}
      <ProfileNavigationMenu />
    </div>
  );
}
