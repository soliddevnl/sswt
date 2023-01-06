import { describe, test, expect } from 'vitest'
import {render, screen} from "@testing-library/vue";
import LoginPage from "src/features/authentication/pages/LoginPage.vue";
import userEvent from "@testing-library/user-event";

describe('<LoginPage />', async () => {
    test('should render', async () => {
        await setup();
        expect(screen.getByText(/sign in/i)).toBeInTheDocument()
    })

    test('user can login', async () => {
        const {signIn} = await setup();
        await signIn({email: 'test@example.com', password: 'password'});

        expect(screen.getByText(/sign out/i)).toBeInTheDocument();
    })
})

async function setup() {
    const user = userEvent.setup()

    async function signIn({email, password}: { email: string, password: string }) {
        await userEvent.type(screen.getByPlaceholderText(/email/i), email);
        await userEvent.type(screen.getByPlaceholderText(/password/i), password);
        await userEvent.click(screen.getByRole('button', {name: /sign in/i}));
    }

    await render(LoginPage);

    return {
        signIn,
        user,
    }
}