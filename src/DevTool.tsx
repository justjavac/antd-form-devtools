import React, { useEffect, useState } from "react";
import { FloatButton } from "antd";
import { Antd } from "./icons";
import { injectCss } from "./utils";
import { DevToolPanal } from "./DevToolPanal";

export function DevTool() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    injectCss();
  }, []);

  return (
    <>
      <FloatButton
        onClick={() => setOpen(true)}
        tooltip="Antd Form DevTools"
        icon={<Antd />}
        shape="square"
      />
      {open && <DevToolPanal open={open} onClose={() => setOpen(false)} />}
    </>
  );
}
