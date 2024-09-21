
import { NextRequest, NextResponse } from 'next/server';
import { Arduino } from '@/models/arduinomodels'; 

import dbConnect from '@/dbconnect/databaseConnect';

export async function GET(request) {
  await dbConnect(); 

  try {
    
    const arduinodata = await Arduino.aggregate([
      {
        $project: {
          _id: 0,
          ExperimentName: 1,
          ExperimentId: 1,
          image1: 1,
          poster: 1,
          plot: 1
        }
      }
    ]);

 

    

    return NextResponse.json({ arduinodata}, { status: 200 });
  } catch (error) {
  
    console.error('Error fetching data:', error.message);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
