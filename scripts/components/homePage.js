export function setupHomePage() {
    const homePage = document.getElementById('home-page');
    homePage.innerHTML = `
      <header>
        <h1>Welcome to Car Doctor</h1>
      </header>
      <main>
        <div class="about">
          <h2>About Car Doctor</h2>
          <p>Car Doctor is a revolutionary car servicing platform that helps users book appointments, track vehicle servicing, and get emergency roadside assistance. The platform ensures seamless interaction between customers and service providers. With live tracking, users stay updated about their vehicle's status. The service also supports SOS functionality for instant help during emergencies. We aim to redefine convenience in car servicing, prioritizing user satisfaction, transparency, and efficiency. With a user-friendly interface, Car Doctor bridges the gap between technology and automotive care. Trust us to provide professional and timely assistance for all your car servicing needs.</p>
        </div>
        <div class="row d-flex flex-wrap">
          <div class="card" onclick="promptLogin('slotBooking')">Book a Slot</div>
          <div class="card" onclick="promptLogin('trackService')">Track Service</div>
        </div>
        <div class="sos-button" onclick="triggerSOS()">SOS</div>
      </main>
    `;
  }
  