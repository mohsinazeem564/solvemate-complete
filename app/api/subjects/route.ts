import { NextResponse } from 'next/server'
import { subjects } from '@/lib/constants/subjects'

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      subjects: subjects
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch subjects' },
      { status: 500 }
    )
  }
}