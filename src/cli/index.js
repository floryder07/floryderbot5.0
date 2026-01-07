#!/usr/bin/env node

// Simple CLI simulator for FloryderBot — stub implementation
const argv = require('process').argv.slice(2);

function help() {
  console.log('FloryderBot CLI simulator\n');
  console.log('Commands: parlay | pickoftheday | feedback');
  console.log('Examples:');
  console.log('  floryderbot parlay --legs 4 --mode normal --markets points,team_total --window 5');
  console.log('  floryderbot pickoftheday --mode safe --window 10');
  console.log('  floryderbot feedback --id PICK_ID --result hit');
}

if (argv.length === 0) {
  help();
  process.exit(0);
}

const command = argv[0];
if (command === 'parlay') {
  console.log('Simulating parlay generation... (stub)');
  console.log('This will be replaced by the thinking engine prototype.');
} else if (command === 'pickoftheday') {
  console.log('Simulating pick of the day... (stub)');
} else if (command === 'feedback') {
  console.log('Recording feedback... (stub)');
} else {
  help();
}
