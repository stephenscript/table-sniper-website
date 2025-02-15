const serviceTypes: { [key: string]: string } = {
    1: 'resy',
};

const resyTableTypes: { [key: string]: string } = {
    1: 'Dining Room',
    2: 'Bar Seats',
};

function decodeBase62(encodedString: string) {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const base = 62;

    let decoded = BigInt(0);

    for (let i = 0; i < encodedString.length; i++) {
        const char = encodedString[i];
        const value = BigInt(characters.indexOf(char));
        decoded = decoded * BigInt(base) + value;
    }

    return decoded.toString();
}

export const getLinkFromToken = (encodedToken: string) => {
    const token = decodeBase62(encodedToken);
    console.log({ encodedToken });
    const type = serviceTypes[token[0]];
    console.log({ token });

    if (type === 'resy') {
        // 0 2 0 250224 160 3 5 75278 2364600
        /*
            first digit is service code (resy, open table, etc)

            second digit is type (Dining Room, Bar Seat, etc)

            next six is date

            next 2 is hour

            next one is 0,1, or 2 for quarters of hour

            next one is version number

            next one is length of venueId

            next n are venueId

            last digits are template 
        */
        // Resy
        const partySize = token[1];
        const tableTypeCode = token[2];
        const tableType = resyTableTypes[tableTypeCode];

        const year = `20${token.slice(3, 5)}`;
        const month = token.slice(5, 7);
        const day = token.slice(7, 9);

        const date = `${year}-${month}-${day}`;
        const hour = token.slice(9, 11);
        const quarter = token[11];
        const minute = parseInt(quarter) * 15;
        const time = `${hour}:${minute.toString().padStart(2, '0')}:00`;
        const versionNumber = token[12];
        const venueIdLength = parseInt(token[13]);
        const venueId = token.slice(14, 14 + venueIdLength);
        const templateId = token.slice(14 + venueIdLength);

        const tableToken = `rgs://resy/${venueId}/${templateId}/${versionNumber}/${date}/${date}/${time}/${partySize}/${tableType}`;

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

        return `https://widgets.resy.com/#/reservation-details?reservation=${encodedReservation}&venueId=${venueId}`;
    }
};
