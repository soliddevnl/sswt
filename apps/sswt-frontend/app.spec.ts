import App from "~/app.vue";
import {render, screen} from "@testing-library/vue";

describe('App renders', () => {
    test('should render', async () => {
        await setup();

        expect(true).toBeTruthy();
    })

    test('shows login page when user is not logged in', async () => {
        await setup();

        expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    })
});

async function setup() {
    await render(App);
}