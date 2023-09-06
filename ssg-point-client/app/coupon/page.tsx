import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

export default async function Coupon() {

  const session = await getServerSession(options)

  if (!session) {
     redirect('/api/auth/signin?callbackUrl=/coupon')
  }

  return (
    <>Coupon</>
  );
}