# Todo App

## Story

You've always though that the system at work place sucks.
Anybody knows which task do who, there are just a few post-its that show a few tasks.
That's why your team head decided that you have the job to make an online todo app,
which helps the team get the work together.

With the app, we need to make dashboards for the different projects, in every dashboard we can make todo cards
and we have the possibility to rename a dashboard or a card at any time.
Also it's a bonus if we can transfer todo cards between different dashboards with drag and drop.

## What are you going to learn?

- React components events
- Reusable React components

## Tasks

1. Create a component that will be used for the project's dashboards. Make sure that its name is replacable.
    - When the page opens, there is a dashboard outstanding from the background with the name `Untilted dashboard`
    - When we click on the dashboard's name, we can change the name of the dashboard
    - There is a button on the top right corner of the button with the sign `Create card`
    - Under the last dashboard there is a `+` sign that creates a new `Untilted dashboard` dashboard when clicked

2. Create a component for the todo cards. Every cards has a name and clickable. When clicked it shows its description part.
    - When we click on the `Create card` button, it creates a card into the given dashboard
    - When the card is created, we can give it a name and a description
    - When we click on the name of the card, we can rename the card
    - When we click on the card it shows its description, when we click again the description part disappears
    - There is an icon in the top right corner of every card that delete the card from the dashboard when clicked

3. [OPTIONAL] It is useful if we can place todo cards into other dashboards. Make the cards transportable by dragging them across dashboards. Create a copy card functionality.
    - We can drag cards into other dashboards
    - There is an icon next to the delete icon that copy the card into the same dashboard

## General requirements

None

## Hints

None

## Background materials

- <i class="far fa-exclamation"></i> [React components](https://reactjs.org/docs/components-and-props.html)
- <i class="far fa-exclamation"></i> [Event handling](https://reactjs.org/docs/handling-events.html)
- <i class="far fa-exclamation"></i> [Styled components](https://styled-components.com/docs/basics)
- <i class="far fa-candy-cane"></i> [MaterialUI](https://material-ui.com/)
- <i class="far fa-candy-cane"></i> [React Bootstrap](https://react-bootstrap.github.io/)
