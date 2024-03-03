'use client'
import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {

  const files = useQuery(api.files.get_files)
  const create_file = useMutation(api.files.create_file)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <SignOutButton>
          <Button>Sign out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign in</Button>
        </SignInButton>
      </SignedOut>
      <div>
        {files?.map((file) => {
          return <p key={file._id}>{file.name}</p>
        })}
      </div>
      <Button onClick={() => create_file({
        name: 'Arun Gounder'
      })}>
        Add file
      </Button>
    </main >
  );
}
