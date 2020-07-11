import React from "react";
import { RecursiveTree } from './recursiveTree'
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton
} from "@chakra-ui/core"

export const MyComponent = (props) => {
  return (
    <Popover usePortal>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent zIndex={4}>
        <PopoverArrow />
        <PopoverHeader>Header</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <RecursiveTree reportConfig={props.reportConfig} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
};
