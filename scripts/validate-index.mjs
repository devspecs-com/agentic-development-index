#!/usr/bin/env node

import process from "node:process";

import { validateIndex } from "./index-validation.mjs";

const root = process.argv[2] ?? process.cwd();

try {
  const { errors, records } = await validateIndex(root);
  if (errors.length > 0) {
    console.error(`Index validation failed with ${errors.length} error(s):`);
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exitCode = 1;
  } else {
    console.log(`Validated ${records.length} record(s) and the GitHub navigation contract.`);
  }
} catch (error) {
  console.error(`Index validation could not run: ${error.message}`);
  process.exitCode = 1;
}
