import React from "react";
import { auth, signIn, signOut } from "../../../auth";

async function page() {
  // const session = await auth();
  return (
    <div>
      {/* {session && session.user?.email ? ( */}
        <div>
          <h3>hello Master </h3>
          {/* {session.user.email} */}
          <form
            // action={async () => {
            //   "use server";
            //   await signOut();
            // }}
          >
            <button type="submit">sign out</button>
          </form>
        </div>
      {/* ) : ( */}
        <form
          // action={async () => {
          //   "use server";
          //   await signIn();
          // }}
        >
          <h3>hello , click here to sign In</h3>
          <button type="submit">sign</button>
        </form>
      {/* )} */}
    </div>
  );
}

export default page;
