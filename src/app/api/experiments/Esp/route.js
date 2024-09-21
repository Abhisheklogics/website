import { NextRequest, NextResponse } from 'next/server';

import dbConnect from '@/dbconnect/databaseConnect';
import { Esp } from '@/models/espmodel';


export async function GET(NextRequest) 
{

    await dbConnect(); 
    let request=NextRequest
      const url = new URL(request.url);
      let exId = url.searchParams.get('exId');
    
      if (!exId) {
        console.log('Experiment ID not available');
        return NextResponse.json({ message: 'Experiment ID is required' }, { status: 400 });
      }
    
      try {
        const experiment = await Esp.findOne({ ExperimentId: exId });
    
        if (!experiment) {
          return NextResponse.json({ message: 'Experiment not found' }, { status: 404 });
        }
    
        return NextResponse.json(experiment, { status: 200 });
      } catch (error) {
        console.error('Server error:', error.message);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
      }

}
