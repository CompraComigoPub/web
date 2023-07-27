const DAY = 24 * 60 * 60 * 1000;

const diffPerDay = (date1, date2) => {
  return Math.round(
    (new Date(date1).getTime() - new Date(date2).getTime()) / DAY
  );
};

const getWelcomeMessageByHour = () => {
  const hour = new Date().getHours();

  if (hour < 12 && hour > 5) {
    return "Bom dia";
  } else if (hour < 18) {
    return "Boa tarde";
  }

  return "Boa noite";
};

export { diffPerDay, getWelcomeMessageByHour };
