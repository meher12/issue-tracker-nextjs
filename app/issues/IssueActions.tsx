import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function IssueActions() {
  return (
    <div mb-5>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
}

export default IssueActions;
