export const DISTANCES = [
  { name: "40m", meters: 40 },
  { name: "50m", meters: 50 },
  { name: "100m", meters: 100 },
  { name: "200m", meters: 200 },
  { name: "300m", meters: 300 },
  { name: "400m", meters: 400 },
  { name: "500m", meters: 500 },
  { name: "600m", meters: 600 },
  { name: "800m", meters: 800 },
  { name: "1000m", meters: 1000 },
  { name: "1200m", meters: 1200 },
  { name: "1500m", meters: 1500 },
  { name: "1600m", meters: 1600 },
  { name: "1 mi", meters: 1609 },
  { name: "2k", meters: 2000 },
  { name: "4k", meters: 4000 },
  { name: "5k", meters: 5000 },
  { name: "5 mi", meters: 8047 },
  { name: "10k", meters: 10000 },
  { name: "15k", meters: 15000 },
  { name: "10 mi", meters: 16090 },
  { name: "20k", meters: 20000 },
  { name: "13.1 mi", meters: 21082 },
  { name: "25k", meters: 25000 },
  { name: "26.2 mi", meters: 42165 },
  { name: "50k", meters: 50000 },
  { name: "100k", meters: 100000 },
  { name: "100 mi", meters: 160934 },
];

export const METERS: number[] = [];

for (let i = 0; i < 1000; i++) {
  METERS.push(i * 200 + 200);
}
