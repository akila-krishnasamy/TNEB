document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map centered on Tamil Nadu
    const map = L.map('map').setView([11.1271, 78.6569], 7);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Office locations data
    const offices = [
        {
            name: 'Chennai Head Office',
            lat: 13.0827,
            lng: 80.2707,
            address: '144, Anna Salai, Chennai - 600002',
            phone: '+91-44-2222-3456',
            email: 'chennai@tneb.com'
        },
        {
            name: 'Coimbatore Regional Office',
            lat: 11.0168,
            lng: 76.9558,
            address: '1/45, Dr. Radhakrishnan Road, Coimbatore - 641002',
            phone: '+91-422-2222-3456',
            email: 'coimbatore@tneb.com'
        },
        {
            name: 'Madurai Regional Office',
            lat: 9.9252,
            lng: 78.1198,
            address: '123, West Veli Street, Madurai - 625001',
            phone: '+91-452-2222-3456',
            email: 'madurai@tneb.com'
        },
        {
            name: 'Trichy Regional Office',
            lat: 10.7905,
            lng: 78.7047,
            address: '56, Williams Road, Trichy - 620001',
            phone: '+91-431-2222-3456',
            email: 'trichy@tneb.com'
        },
        {
            name: 'Salem Regional Office',
            lat: 11.6643,
            lng: 78.1460,
            address: '89, Junction Main Road, Salem - 636001',
            phone: '+91-427-2222-3456',
            email: 'salem@tneb.com'
        }
    ];

    // Custom icon for markers
    const officeIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });

    // Add markers for each office
    offices.forEach(office => {
        const marker = L.marker([office.lat, office.lng], { icon: officeIcon })
            .bindPopup(`
                <div class="office-popup">
                    <h3>${office.name}</h3>
                    <p>${office.address}</p>
                    <div class="contact-info">
                        <p>📞 ${office.phone}</p>
                        <p>✉️ ${office.email}</p>
                    </div>
                </div>
            `)
            .addTo(map);
    });

    // Handle location list clicks
    document.querySelectorAll('.list-group-item').forEach(item => {
        item.addEventListener('click', function() {
            const lat = parseFloat(this.dataset.lat);
            const lng = parseFloat(this.dataset.lng);
            map.setView([lat, lng], 13);
            
            // Update active state
            document.querySelectorAll('.list-group-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Handle district selection
    document.getElementById('districtSelect').addEventListener('change', function() {
        const district = this.value;
        const office = offices.find(o => o.name.toLowerCase().includes(district));
        if (office) {
            map.setView([office.lat, office.lng], 11);
        }
    });

    // Handle search
    document.getElementById('searchButton').addEventListener('click', function() {
        const searchTerm = document.getElementById('locationSearch').value.toLowerCase();
        const office = offices.find(o => 
            o.name.toLowerCase().includes(searchTerm) || 
            o.address.toLowerCase().includes(searchTerm)
        );
        
        if (office) {
            map.setView([office.lat, office.lng], 13);
        }
    });

    // Handle search on enter key
    document.getElementById('locationSearch').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('searchButton').click();
        }
    });
});