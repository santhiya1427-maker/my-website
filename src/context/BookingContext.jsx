import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const BookingContext = createContext(null);

const bookingsKey = 'goride-bookings';
const userKey = 'goride-user';
const selectedVehicleKey = 'goride-selected-vehicle';

const defaultBooking = {
  tripType: 'One Way',
  pickup: '',
  drop: '',
  stops: [],
  date: '',
  time: '',
  passengers: '',
  returnDate: '',
  returnTime: '',
  airport: '',
  flightNumber: '',
  packageName: '',
  duration: '',
  paymentOption: 'Cash',
  startTime: '',
  route: '',
};

const getInitialState = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
};

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState(() => getInitialState('goride-current-booking', defaultBooking));
  const [selectedVehicle, setSelectedVehicle] = useState(() => getInitialState(selectedVehicleKey, null));
  const [confirmation, setConfirmation] = useState(() => getInitialState('goride-confirmation', null));
  const [bookings, setBookings] = useState(() => getInitialState(bookingsKey, []));
  const [currentUser, setCurrentUser] = useState(() => getInitialState(userKey, null));

  useEffect(() => {
    localStorage.setItem('goride-current-booking', JSON.stringify(booking));
  }, [booking]);

  useEffect(() => {
    localStorage.setItem(selectedVehicleKey, JSON.stringify(selectedVehicle));
  }, [selectedVehicle]);

  useEffect(() => {
    localStorage.setItem('goride-confirmation', JSON.stringify(confirmation));
  }, [confirmation]);

  useEffect(() => {
    localStorage.setItem(bookingsKey, JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem(userKey, JSON.stringify(currentUser));
  }, [currentUser]);

  const value = useMemo(
    () => ({
      booking,
      setBooking,
      selectedVehicle,
      setSelectedVehicle,
      confirmation,
      setConfirmation,
      bookings,
      setBookings,
      currentUser,
      setCurrentUser,
      defaultBooking,
    }),
    [booking, selectedVehicle, confirmation, bookings, currentUser],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBookingContext() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingContext must be used inside BookingProvider');
  }
  return context;
}
