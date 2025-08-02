const venueId = '834';
const date = '2025-08-09';
const time = '21:30';
const tableType = 'Dining Room';

// const tableToken = `rgs://resy/${venueId}/${templateId}/${versionNumber}/${date}/${date}/${time}/${partySize}/${tableType}`;

const tableToken = 'rgs://resy/834/3441518/2/2025-08-09/2025-08-09/21:30:00/2/Dining Room';

let encodedReservation = encodeURIComponent(
    JSON.stringify({
        // venueName: this.restaurant.name,
        // serviceTypeId: 2,
        // templateId: templateId,
        time: `${date} ${time}`,
        type: tableType,
        token: tableToken,
    })
);

encodedReservation = encodedReservation.replace('+', '%2F');

console.log(
    `https://widgets.resy.com/#/reservation-details?reservation=${encodedReservation}&venueId=${venueId}`
);
