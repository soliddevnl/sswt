import {afterEach} from "vitest";
import {cleanup} from "@testing-library/vue";
import matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';
import { expect } from 'vitest';

expect.extend(matchers);

afterEach(() => {
    cleanup()
})
