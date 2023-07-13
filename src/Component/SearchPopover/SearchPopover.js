import * as Popover from "@radix-ui/react-popover";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SearchPopover.css";

export const SearchPopover = ({ children, array, inputRef }) => {
  const [isPopoverOpen, setPopoverOpen] = useState(true);

  useEffect(() => {
    if (array.length > 0 && inputRef.current?.value?.length > 0) {
      setPopoverOpen(true);
      setTimeout(() => {
        inputRef?.current?.focus();
      }, 0);
      return;
    }
    setPopoverOpen(false);
  }, [array]);

  return (
    <div className="Popover">
      <Popover.Root open={isPopoverOpen}>
        <Popover.Trigger className="PopoverTrigger">
          {" "}
          {children}
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="PopoverContent">
            {array?.map(({ title, id }) => (
              <>
                <Link
                  key={id}
                  to={`/meetup/${id}`}
                  onClick={() => setPopoverOpen(false)}
                >
                  {title}
                </Link>
                <hr />
              </>
            ))}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
