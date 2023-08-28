"use client";
import Data from "@/components/Data";
import Login from "@/components/Login";
import { RootState } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
export default function Home() {
  // const username = useAppSelector((state) => state.authReducer.value.username);
  // const moderator = useAppSelector(
  //   (state) => state.authReducer.value.isModerator
  // );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Login />
      <h1>username: {username}</h1>
      <h1>moderator: {moderator}</h1> */}
      <Data />
    </main>
  );
}
