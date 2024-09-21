// app/api/searchArduinoData/route.js
import { NextRequest, NextResponse } from 'next/server';
import { Respberry } from '@/models/resberymodel'; 
import dbConnect from '@/dbconnect/databaseConnect';

export async function GET(request) {
  await dbConnect();

  const url = new URL(request.url);
  const search = url.searchParams.get('Search');

  if (!search) {
    console.log('Search query not provided');
    return NextResponse.json({ error: 'Search query is required.' }, { status: 400 });
  }

  try {
    const agg = [
      {
        $search: {
          index: 'default', 
          autocomplete: {
            query: search,
            path: 'ExperimentName',
            fuzzy: {
              maxEdits: 2,
            },
          },
        },
      },
      {
        $limit: 5,
      },
      {
        $project: {
          _id: 0,
          ExperimentName: 1,
          ExperimentId: 1,
          image1: 1,
          poster: 1,
          plot: 1,
        },
      },
    ];

    const response1 = await Respberry.aggregate(agg);

    return NextResponse.json(response1, { status: 200 });
  } catch (error) {
    console.error('Error performing search:', error.message);
    return NextResponse.json({ error: 'An error occurred while searching.' }, { status: 500 });
  }
}
