# Google Places API Next.js Application

This is a business directory web application built using Next.js that integrates with the Google Places API. The application allows users to search for places, view detailed information about them, and see their locations on a map.

## Features

- **Search for Places**: Users can search for various places using the Google Places API.
- **Display Place Information**: Detailed information about each place, such as name, address, rating, and opening hours.
- **View Photos**: Displays photos of the places using the Google Places Photo service.
- **Interactive Map**: Integrated Google Maps to show the location of the selected place.
- **Responsive Design**: The application is responsive and works well on both desktop and mobile devices.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and generating static websites.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Google Places API**: To fetch place details, photos, and location information.
- **Google Maps API**: To display maps and place locations.

## Components

### PlaceList

This component displays a list of places based on the search results. Each place item is clickable and will open a side drawer with more detailed information.

### PlaceItem

A single place item component that shows basic information about a place such as its name and address.

### SideDrawer

A side drawer component that shows detailed information about the selected place. This includes the place's name, address, rating, opening hours, photos, and a map showing its location.

### Skeleton

A skeleton loader component used to show a loading state while the data is being fetched.

## How to Run the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/google-places-nextjs.git
    cd google-places-nextjs
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env.local` file in the root of the project and add your Google Places API key:
    ```bash
    NEXT_PUBLIC_PLACES_API=your_google_places_api_key
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


