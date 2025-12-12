import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (<div><h1>Logged out</h1> - session object is {JSON.stringify(session)}</div>);
  }
  else {
    return (<div><h1>Logged-IN flow</h1>Session object is: <pre>{JSON.stringify(session)}</pre></div>);
  }
}
