import {NextResponse} from "next/server";

export async function GET(){
    const attendance = [
        {
            "date": "2023-04-01",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.8,
            "ppi": 3.9999999999999996,
            "sp": 8.700000000000001,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-02",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.600000000000001,
            "ppi": 4.1,
            "sp": 9.000000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-03",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.600000000000001,
            "ppi": 4.1,
            "sp": 8.900000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-04",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.600000000000001,
            "ppi": 3.9999999999999996,
            "sp": 9.100000000000001,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-05",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.8,
            "ppi": 3.8999999999999995,
            "sp": 9.100000000000001,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-06",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.8,
            "ppi": 3.7999999999999994,
            "sp": 8.900000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-07",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.8,
            "ppi": 3.8999999999999995,
            "sp": 9.000000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-08",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.8,
            "ppi": 3.9999999999999996,
            "sp": 9.100000000000001,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-09",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.8,
            "ppi": 3.8999999999999995,
            "sp": 9.100000000000001,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-10",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.8,
            "ppi": 3.7999999999999994,
            "sp": 9.100000000000001,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-11",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.8,
            "ppi": 3.9999999999999996,
            "sp": 9.000000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-12",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.700000000000001,
            "ppi": 3.8999999999999995,
            "sp": 8.800000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-13",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.700000000000001,
            "ppi": 3.7999999999999994,
            "sp": 9.100000000000003,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-14",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.8,
            "ppi": 3.9999999999999996,
            "sp": 9.300000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-15",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.8,
            "ppi": 4.1,
            "sp": 9.000000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-16",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.600000000000001,
            "ppi": 4.1,
            "sp": 8.800000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-17",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.400000000000002,
            "ppi": 4.199999999999999,
            "sp": 8.500000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-18",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.400000000000002,
            "ppi": 4.1,
            "sp": 8.400000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-19",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.200000000000003,
            "ppi": 3.9999999999999996,
            "sp": 8.400000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-20",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.100000000000003,
            "ppi": 3.9999999999999996,
            "sp": 8.500000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-21",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.100000000000003,
            "ppi": 3.8999999999999995,
            "sp": 8.300000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-22",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.100000000000003,
            "ppi": 3.8999999999999995,
            "sp": 8.500000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-23",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.200000000000003,
            "ppi": 3.7999999999999994,
            "sp": 8.300000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-24",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.400000000000002,
            "ppi": 3.8999999999999995,
            "sp": 8.200000000000003,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-25",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.400000000000002,
            "ppi": 3.8999999999999995,
            "sp": 8.400000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-26",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.400000000000002,
            "ppi": 3.7999999999999994,
            "sp": 8.200000000000003,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-27",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.400000000000002,
            "ppi": 3.7999999999999994,
            "sp": 8.000000000000004,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-28",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.300000000000002,
            "ppi": 3.7999999999999994,
            "sp": 7.900000000000004,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-29",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.200000000000003,
            "ppi": 3.6999999999999993,
            "sp": 7.800000000000004,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-04-30",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.000000000000004,
            "ppi": 3.7999999999999994,
            "sp": 7.800000000000004,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-01",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.900000000000004,
            "ppi": 3.6999999999999993,
            "sp": 8.000000000000004,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-02",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.900000000000004,
            "ppi": 3.6999999999999993,
            "sp": 8.200000000000003,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-03",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.800000000000004,
            "ppi": 3.6999999999999993,
            "sp": 8.500000000000004,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-04",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.800000000000004,
            "ppi": 3.599999999999999,
            "sp": 8.700000000000003,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-05",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.700000000000005,
            "ppi": 3.6999999999999993,
            "sp": 8.800000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-06",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.500000000000005,
            "ppi": 3.8999999999999995,
            "sp": 9.100000000000003,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-07",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.300000000000006,
            "ppi": 3.6999999999999993,
            "sp": 9.200000000000003,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-08",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.400000000000006,
            "ppi": 3.499999999999999,
            "sp": 9.300000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-09",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.400000000000006,
            "ppi": 3.399999999999999,
            "sp": 9.200000000000003,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-10",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.400000000000006,
            "ppi": 3.499999999999999,
            "sp": 9.200000000000003,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-11",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.300000000000006,
            "ppi": 3.399999999999999,
            "sp": 9.400000000000002,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-12",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.300000000000006,
            "ppi": 3.2,
            "sp": 9.200000000000003,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-13",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.200000000000006,
            "ppi": 3.4000000000000004,
            "sp": 9.5,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-14",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.200000000000006,
            "ppi": 3.5000000000000004,
            "sp": 9.4,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-15",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.300000000000006,
            "ppi": 3.5000000000000004,
            "sp": 9.4,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-16",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.400000000000006,
            "ppi": 3.4000000000000004,
            "sp": 9.1,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-17",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.500000000000005,
            "ppi": 3.6000000000000005,
            "sp": 8.9,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-18",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.600000000000005,
            "ppi": 3.4000000000000004,
            "sp": 9.1,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-19",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.600000000000005,
            "ppi": 3.3000000000000003,
            "sp": 9.0,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-20",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.500000000000005,
            "ppi": 3.2,
            "sp": 9.0,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-21",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.500000000000005,
            "ppi": 3.2,
            "sp": 8.9,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-22",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.700000000000005,
            "ppi": 3.4000000000000004,
            "sp": 8.9,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-23",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.600000000000005,
            "ppi": 3.2,
            "sp": 9.1,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-24",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.600000000000005,
            "ppi": 3.2,
            "sp": 9.0,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-25",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.500000000000005,
            "ppi": 3.4000000000000004,
            "sp": 9.1,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-26",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.600000000000005,
            "ppi": 3.3000000000000003,
            "sp": 9.299999999999999,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-27",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.700000000000005,
            "ppi": 3.2,
            "sp": 8.999999999999998,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-28",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.800000000000004,
            "ppi": 3.2,
            "sp": 9.199999999999998,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-29",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.800000000000004,
            "ppi": 3.2,
            "sp": 9.099999999999998,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-30",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.900000000000004,
            "ppi": 3.2,
            "sp": 8.899999999999999,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-05-31",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.800000000000004,
            "ppi": 3.2,
            "sp": 8.7,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-06-01",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.700000000000005,
            "ppi": 3.2,
            "sp": 8.899999999999999,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-06-02",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.500000000000005,
            "ppi": 3.3000000000000003,
            "sp": 8.799999999999999,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-06-03",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.300000000000006,
            "ppi": 3.3000000000000003,
            "sp": 8.6,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-06-04",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.400000000000006,
            "ppi": 3.4000000000000004,
            "sp": 8.299999999999999,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-06-05",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.600000000000005,
            "ppi": 3.6000000000000005,
            "sp": 8.2,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-06-06",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.500000000000005,
            "ppi": 3.5000000000000004,
            "sp": 8.299999999999999,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-06-07",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.600000000000005,
            "ppi": 3.7000000000000006,
            "sp": 8.2,
            "attendance_percentage": 100.0
        },
        {
            "date": "2023-06-08",
            "attendance": false,
            "wage": 27.0,
            "apr": 8.700000000000005,
            "ppi": 3.6000000000000005,
            "sp": 8.2,
            "attendance_percentage": 98.55
        },
        {
            "date": "2023-06-09",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.800000000000004,
            "ppi": 3.7000000000000006,
            "sp": 8.2,
            "attendance_percentage": 98.57
        },
        {
            "date": "2023-06-10",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.900000000000004,
            "ppi": 3.5000000000000004,
            "sp": 8.5,
            "attendance_percentage": 98.59
        },
        {
            "date": "2023-06-11",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.100000000000003,
            "ppi": 3.6000000000000005,
            "sp": 8.4,
            "attendance_percentage": 98.61
        },
        {
            "date": "2023-06-12",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.000000000000004,
            "ppi": 3.6000000000000005,
            "sp": 8.1,
            "attendance_percentage": 98.63
        },
        {
            "date": "2023-06-13",
            "attendance": false,
            "wage": 27.0,
            "apr": 9.100000000000003,
            "ppi": 3.5000000000000004,
            "sp": 8.4,
            "attendance_percentage": 97.3
        },
        {
            "date": "2023-06-14",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.000000000000004,
            "ppi": 3.4000000000000004,
            "sp": 8.4,
            "attendance_percentage": 97.33
        },
        {
            "date": "2023-06-15",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.100000000000003,
            "ppi": 3.6000000000000005,
            "sp": 8.3,
            "attendance_percentage": 97.37
        },
        {
            "date": "2023-06-16",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.000000000000004,
            "ppi": 3.5000000000000004,
            "sp": 8.100000000000001,
            "attendance_percentage": 97.4
        },
        {
            "date": "2023-06-17",
            "attendance": true,
            "wage": 27.0,
            "apr": 8.900000000000004,
            "ppi": 3.5000000000000004,
            "sp": 8.400000000000002,
            "attendance_percentage": 97.44
        },
        {
            "date": "2023-06-18",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.000000000000004,
            "ppi": 3.7000000000000006,
            "sp": 8.700000000000003,
            "attendance_percentage": 97.47
        },
        {
            "date": "2023-06-19",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.100000000000003,
            "ppi": 3.6000000000000005,
            "sp": 9.000000000000004,
            "attendance_percentage": 97.5
        },
        {
            "date": "2023-06-20",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.000000000000004,
            "ppi": 3.8000000000000007,
            "sp": 9.100000000000003,
            "attendance_percentage": 97.53
        },
        {
            "date": "2023-06-21",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.000000000000004,
            "ppi": 3.7000000000000006,
            "sp": 8.900000000000004,
            "attendance_percentage": 97.56
        },
        {
            "date": "2023-06-22",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.200000000000003,
            "ppi": 3.8000000000000007,
            "sp": 9.100000000000003,
            "attendance_percentage": 97.59
        },
        {
            "date": "2023-06-23",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.200000000000003,
            "ppi": 3.6000000000000005,
            "sp": 9.200000000000003,
            "attendance_percentage": 97.62
        },
        {
            "date": "2023-06-24",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.000000000000004,
            "ppi": 3.7000000000000006,
            "sp": 9.5,
            "attendance_percentage": 97.65
        },
        {
            "date": "2023-06-25",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.000000000000004,
            "ppi": 3.7000000000000006,
            "sp": 9.3,
            "attendance_percentage": 97.67
        },
        {
            "date": "2023-06-26",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.000000000000004,
            "ppi": 3.8000000000000007,
            "sp": 9.3,
            "attendance_percentage": 97.7
        },
        {
            "date": "2023-06-27",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.200000000000003,
            "ppi": 3.900000000000001,
            "sp": 9.5,
            "attendance_percentage": 97.73
        },
        {
            "date": "2023-06-28",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.300000000000002,
            "ppi": 4.1000000000000005,
            "sp": 9.3,
            "attendance_percentage": 97.75
        },
        {
            "date": "2023-06-29",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.400000000000002,
            "ppi": 4.2,
            "sp": 9.0,
            "attendance_percentage": 97.78
        },
        {
            "date": "2023-06-30",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.600000000000001,
            "ppi": 4.3,
            "sp": 9.2,
            "attendance_percentage": 97.8
        },
        {
            "date": "2023-07-01",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.8,
            "ppi": 4.3999999999999995,
            "sp": 9.299999999999999,
            "attendance_percentage": 97.83
        },
        {
            "date": "2023-07-02",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.8,
            "ppi": 4.499999999999999,
            "sp": 9.1,
            "attendance_percentage": 97.85
        },
        {
            "date": "2023-07-03",
            "attendance": true,
            "wage": 27.0,
            "apr": 9.600000000000001,
            "ppi": 4.499999999999999,
            "sp": 9.299999999999999,
            "attendance_percentage": 97.87
        },
        {
            "date": "2023-07-04",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.700000000000001,
            "ppi": 4.499999999999999,
            "sp": 9.299999999999999,
            "attendance_percentage": 97.89
        },
        {
            "date": "2023-07-05",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.500000000000002,
            "ppi": 4.5,
            "sp": 9.2,
            "attendance_percentage": 97.92
        },
        {
            "date": "2023-07-06",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.300000000000002,
            "ppi": 4.5,
            "sp": 9.299999999999999,
            "attendance_percentage": 97.94
        },
        {
            "date": "2023-07-07",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.400000000000002,
            "ppi": 4.4,
            "sp": 9.1,
            "attendance_percentage": 97.96
        },
        {
            "date": "2023-07-08",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.300000000000002,
            "ppi": 4.4,
            "sp": 8.9,
            "attendance_percentage": 97.98
        },
        {
            "date": "2023-07-09",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.500000000000002,
            "ppi": 4.300000000000001,
            "sp": 9.200000000000001,
            "attendance_percentage": 98.0
        },
        {
            "date": "2023-07-10",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.400000000000002,
            "ppi": 4.4,
            "sp": 9.200000000000001,
            "attendance_percentage": 98.02
        },
        {
            "date": "2023-07-11",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.300000000000001,
            "sp": 9.4,
            "attendance_percentage": 98.04
        },
        {
            "date": "2023-07-12",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.700000000000001,
            "ppi": 4.300000000000001,
            "sp": 9.3,
            "attendance_percentage": 98.06
        },
        {
            "date": "2023-07-13",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.500000000000002,
            "ppi": 4.4,
            "sp": 9.5,
            "attendance_percentage": 98.08
        },
        {
            "date": "2023-07-14",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.400000000000002,
            "ppi": 4.4,
            "sp": 9.4,
            "attendance_percentage": 98.1
        },
        {
            "date": "2023-07-15",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.300000000000002,
            "ppi": 4.2,
            "sp": 9.4,
            "attendance_percentage": 98.11
        },
        {
            "date": "2023-07-16",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.200000000000003,
            "ppi": 4.3,
            "sp": 9.4,
            "attendance_percentage": 98.13
        },
        {
            "date": "2023-07-17",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.200000000000003,
            "ppi": 4.3,
            "sp": 9.4,
            "attendance_percentage": 98.15
        },
        {
            "date": "2023-07-18",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.200000000000003,
            "ppi": 4.2,
            "sp": 9.3,
            "attendance_percentage": 98.17
        },
        {
            "date": "2023-07-19",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.200000000000003,
            "ppi": 4.2,
            "sp": 9.0,
            "attendance_percentage": 98.18
        },
        {
            "date": "2023-07-20",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.200000000000003,
            "ppi": 4.1000000000000005,
            "sp": 9.1,
            "attendance_percentage": 98.2
        },
        {
            "date": "2023-07-21",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.300000000000002,
            "ppi": 4.1000000000000005,
            "sp": 9.2,
            "attendance_percentage": 98.21
        },
        {
            "date": "2023-07-22",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.400000000000002,
            "ppi": 4.000000000000001,
            "sp": 9.399999999999999,
            "attendance_percentage": 98.23
        },
        {
            "date": "2023-07-23",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.200000000000003,
            "ppi": 3.900000000000001,
            "sp": 9.399999999999999,
            "attendance_percentage": 98.25
        },
        {
            "date": "2023-07-24",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.400000000000002,
            "ppi": 4.000000000000001,
            "sp": 9.399999999999999,
            "attendance_percentage": 98.26
        },
        {
            "date": "2023-07-25",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.300000000000002,
            "ppi": 4.200000000000001,
            "sp": 9.2,
            "attendance_percentage": 98.28
        },
        {
            "date": "2023-07-26",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.100000000000003,
            "ppi": 4.400000000000001,
            "sp": 9.399999999999999,
            "attendance_percentage": 98.29
        },
        {
            "date": "2023-07-27",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.100000000000003,
            "ppi": 4.5,
            "sp": 9.099999999999998,
            "attendance_percentage": 98.31
        },
        {
            "date": "2023-07-28",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.100000000000003,
            "ppi": 4.5,
            "sp": 8.999999999999998,
            "attendance_percentage": 98.32
        },
        {
            "date": "2023-07-29",
            "attendance": true,
            "wage": 27.71,
            "apr": 8.900000000000004,
            "ppi": 4.3,
            "sp": 9.199999999999998,
            "attendance_percentage": 98.33
        },
        {
            "date": "2023-07-30",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.000000000000004,
            "ppi": 4.3999999999999995,
            "sp": 9.099999999999998,
            "attendance_percentage": 98.35
        },
        {
            "date": "2023-07-31",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.200000000000003,
            "ppi": 4.5,
            "sp": 9.199999999999998,
            "attendance_percentage": 98.36
        },
        {
            "date": "2023-08-01",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.200000000000003,
            "ppi": 4.5,
            "sp": 9.299999999999997,
            "attendance_percentage": 98.37
        },
        {
            "date": "2023-08-02",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.100000000000003,
            "ppi": 4.5,
            "sp": 9.399999999999997,
            "attendance_percentage": 98.39
        },
        {
            "date": "2023-08-03",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.000000000000004,
            "ppi": 4.4,
            "sp": 9.199999999999998,
            "attendance_percentage": 98.4
        },
        {
            "date": "2023-08-04",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.200000000000003,
            "ppi": 4.5,
            "sp": 8.999999999999998,
            "attendance_percentage": 98.41
        },
        {
            "date": "2023-08-05",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.000000000000004,
            "ppi": 4.5,
            "sp": 8.899999999999999,
            "attendance_percentage": 98.43
        },
        {
            "date": "2023-08-06",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.100000000000003,
            "ppi": 4.5,
            "sp": 8.7,
            "attendance_percentage": 98.44
        },
        {
            "date": "2023-08-07",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.300000000000002,
            "ppi": 4.5,
            "sp": 8.7,
            "attendance_percentage": 98.45
        },
        {
            "date": "2023-08-08",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.500000000000002,
            "ppi": 4.5,
            "sp": 8.5,
            "attendance_percentage": 98.46
        },
        {
            "date": "2023-08-09",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.400000000000002,
            "ppi": 4.5,
            "sp": 8.5,
            "attendance_percentage": 98.47
        },
        {
            "date": "2023-08-10",
            "attendance": false,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.3,
            "sp": 8.4,
            "attendance_percentage": 97.73
        },
        {
            "date": "2023-08-11",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.500000000000002,
            "ppi": 4.2,
            "sp": 8.4,
            "attendance_percentage": 97.74
        },
        {
            "date": "2023-08-12",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.2,
            "sp": 8.6,
            "attendance_percentage": 97.76
        },
        {
            "date": "2023-08-13",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.1000000000000005,
            "sp": 8.799999999999999,
            "attendance_percentage": 97.78
        },
        {
            "date": "2023-08-14",
            "attendance": false,
            "wage": 27.71,
            "apr": 9.400000000000002,
            "ppi": 4.000000000000001,
            "sp": 8.7,
            "attendance_percentage": 97.06
        },
        {
            "date": "2023-08-15",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.300000000000002,
            "ppi": 3.8000000000000007,
            "sp": 8.5,
            "attendance_percentage": 97.08
        },
        {
            "date": "2023-08-16",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.400000000000002,
            "ppi": 3.8000000000000007,
            "sp": 8.5,
            "attendance_percentage": 97.1
        },
        {
            "date": "2023-08-17",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 3.900000000000001,
            "sp": 8.3,
            "attendance_percentage": 97.12
        },
        {
            "date": "2023-08-18",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.700000000000001,
            "ppi": 4.000000000000001,
            "sp": 8.3,
            "attendance_percentage": 97.14
        },
        {
            "date": "2023-08-19",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 3.900000000000001,
            "sp": 8.4,
            "attendance_percentage": 97.16
        },
        {
            "date": "2023-08-20",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.000000000000001,
            "sp": 8.700000000000001,
            "attendance_percentage": 97.18
        },
        {
            "date": "2023-08-21",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.700000000000001,
            "ppi": 4.000000000000001,
            "sp": 9.000000000000002,
            "attendance_percentage": 97.2
        },
        {
            "date": "2023-08-22",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.000000000000001,
            "sp": 8.900000000000002,
            "attendance_percentage": 97.22
        },
        {
            "date": "2023-08-23",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 3.900000000000001,
            "sp": 8.700000000000003,
            "attendance_percentage": 97.24
        },
        {
            "date": "2023-08-24",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.000000000000001,
            "sp": 8.800000000000002,
            "attendance_percentage": 97.26
        },
        {
            "date": "2023-08-25",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.000000000000001,
            "sp": 9.100000000000003,
            "attendance_percentage": 97.28
        },
        {
            "date": "2023-08-26",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.000000000000001,
            "sp": 9.300000000000002,
            "attendance_percentage": 97.3
        },
        {
            "date": "2023-08-27",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 3.900000000000001,
            "sp": 9.200000000000003,
            "attendance_percentage": 97.32
        },
        {
            "date": "2023-08-28",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 3.8000000000000007,
            "sp": 8.900000000000002,
            "attendance_percentage": 97.33
        },
        {
            "date": "2023-08-29",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 3.900000000000001,
            "sp": 9.200000000000003,
            "attendance_percentage": 97.35
        },
        {
            "date": "2023-08-30",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.700000000000001,
            "ppi": 3.8000000000000007,
            "sp": 9.200000000000003,
            "attendance_percentage": 97.37
        },
        {
            "date": "2023-08-31",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.000000000000001,
            "sp": 9.400000000000002,
            "attendance_percentage": 97.39
        },
        {
            "date": "2023-09-01",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.1000000000000005,
            "sp": 9.5,
            "attendance_percentage": 97.4
        },
        {
            "date": "2023-09-02",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.1000000000000005,
            "sp": 9.4,
            "attendance_percentage": 97.42
        },
        {
            "date": "2023-09-03",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.300000000000001,
            "sp": 9.5,
            "attendance_percentage": 97.44
        },
        {
            "date": "2023-09-04",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.400000000000002,
            "ppi": 4.200000000000001,
            "sp": 9.3,
            "attendance_percentage": 97.45
        },
        {
            "date": "2023-09-05",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.300000000000002,
            "ppi": 4.100000000000001,
            "sp": 9.200000000000001,
            "attendance_percentage": 97.47
        },
        {
            "date": "2023-09-06",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.200000000000003,
            "ppi": 3.9000000000000012,
            "sp": 9.3,
            "attendance_percentage": 97.48
        },
        {
            "date": "2023-09-07",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.300000000000002,
            "ppi": 4.000000000000001,
            "sp": 9.5,
            "attendance_percentage": 97.5
        },
        {
            "date": "2023-09-08",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.400000000000002,
            "ppi": 4.200000000000001,
            "sp": 9.5,
            "attendance_percentage": 97.52
        },
        {
            "date": "2023-09-09",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.300000000000001,
            "sp": 9.4,
            "attendance_percentage": 97.53
        },
        {
            "date": "2023-09-10",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.500000000000002,
            "ppi": 4.1000000000000005,
            "sp": 9.4,
            "attendance_percentage": 97.55
        },
        {
            "date": "2023-09-11",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.300000000000001,
            "sp": 9.200000000000001,
            "attendance_percentage": 97.56
        },
        {
            "date": "2023-09-12",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.200000000000001,
            "sp": 9.100000000000001,
            "attendance_percentage": 97.58
        },
        {
            "date": "2023-09-13",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.200000000000001,
            "sp": 9.000000000000002,
            "attendance_percentage": 97.59
        },
        {
            "date": "2023-09-14",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.500000000000002,
            "ppi": 4.200000000000001,
            "sp": 9.100000000000001,
            "attendance_percentage": 97.6
        },
        {
            "date": "2023-09-15",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.500000000000002,
            "ppi": 4.100000000000001,
            "sp": 8.900000000000002,
            "attendance_percentage": 97.62
        },
        {
            "date": "2023-09-16",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.400000000000002,
            "ppi": 4.200000000000001,
            "sp": 8.600000000000001,
            "attendance_percentage": 97.63
        },
        {
            "date": "2023-09-17",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.500000000000002,
            "ppi": 4.300000000000001,
            "sp": 8.600000000000001,
            "attendance_percentage": 97.65
        },
        {
            "date": "2023-09-18",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.5,
            "sp": 8.600000000000001,
            "attendance_percentage": 97.66
        },
        {
            "date": "2023-09-19",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.700000000000001,
            "ppi": 4.5,
            "sp": 8.900000000000002,
            "attendance_percentage": 97.67
        },
        {
            "date": "2023-09-20",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.5,
            "sp": 8.900000000000002,
            "attendance_percentage": 97.69
        },
        {
            "date": "2023-09-21",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.4,
            "sp": 9.100000000000001,
            "attendance_percentage": 97.7
        },
        {
            "date": "2023-09-22",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.2,
            "sp": 9.100000000000001,
            "attendance_percentage": 97.71
        },
        {
            "date": "2023-09-23",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.1000000000000005,
            "sp": 9.400000000000002,
            "attendance_percentage": 97.73
        },
        {
            "date": "2023-09-24",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.2,
            "sp": 9.5,
            "attendance_percentage": 97.74
        },
        {
            "date": "2023-09-25",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.2,
            "sp": 9.4,
            "attendance_percentage": 97.75
        },
        {
            "date": "2023-09-26",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.4,
            "sp": 9.5,
            "attendance_percentage": 97.77
        },
        {
            "date": "2023-09-27",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.5,
            "sp": 9.3,
            "attendance_percentage": 97.78
        },
        {
            "date": "2023-09-28",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.700000000000001,
            "ppi": 4.5,
            "sp": 9.100000000000001,
            "attendance_percentage": 97.79
        },
        {
            "date": "2023-09-29",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.4,
            "sp": 9.000000000000002,
            "attendance_percentage": 97.8
        },
        {
            "date": "2023-09-30",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.300000000000001,
            "sp": 8.800000000000002,
            "attendance_percentage": 97.81
        },
        {
            "date": "2023-10-01",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.5,
            "sp": 9.000000000000002,
            "attendance_percentage": 97.83
        },
        {
            "date": "2023-10-02",
            "attendance": false,
            "wage": 27.71,
            "apr": 9.700000000000001,
            "ppi": 4.4,
            "sp": 9.200000000000001,
            "attendance_percentage": 97.3
        },
        {
            "date": "2023-10-03",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.300000000000001,
            "sp": 9.4,
            "attendance_percentage": 97.31
        },
        {
            "date": "2023-10-04",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.200000000000001,
            "sp": 9.4,
            "attendance_percentage": 97.33
        },
        {
            "date": "2023-10-05",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.700000000000001,
            "ppi": 4.100000000000001,
            "sp": 9.4,
            "attendance_percentage": 97.34
        },
        {
            "date": "2023-10-06",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.200000000000001,
            "sp": 9.4,
            "attendance_percentage": 97.35
        },
        {
            "date": "2023-10-07",
            "attendance": false,
            "wage": 27.71,
            "apr": 9.500000000000002,
            "ppi": 4.300000000000001,
            "sp": 9.200000000000001,
            "attendance_percentage": 96.84
        },
        {
            "date": "2023-10-08",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.200000000000001,
            "sp": 9.4,
            "attendance_percentage": 96.86
        },
        {
            "date": "2023-10-09",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.700000000000001,
            "ppi": 4.400000000000001,
            "sp": 9.200000000000001,
            "attendance_percentage": 96.88
        },
        {
            "date": "2023-10-10",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.400000000000001,
            "sp": 9.000000000000002,
            "attendance_percentage": 96.89
        },
        {
            "date": "2023-10-11",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.700000000000001,
            "ppi": 4.5,
            "sp": 9.000000000000002,
            "attendance_percentage": 96.91
        },
        {
            "date": "2023-10-12",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.5,
            "sp": 8.700000000000001,
            "attendance_percentage": 96.92
        },
        {
            "date": "2023-10-13",
            "attendance": false,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.4,
            "sp": 8.600000000000001,
            "attendance_percentage": 96.43
        },
        {
            "date": "2023-10-14",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.300000000000001,
            "sp": 8.3,
            "attendance_percentage": 96.45
        },
        {
            "date": "2023-10-15",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.8,
            "ppi": 4.5,
            "sp": 8.600000000000001,
            "attendance_percentage": 96.46
        },
        {
            "date": "2023-10-16",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.600000000000001,
            "ppi": 4.5,
            "sp": 8.700000000000001,
            "attendance_percentage": 96.48
        },
        {
            "date": "2023-10-17",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.700000000000001,
            "ppi": 4.5,
            "sp": 8.600000000000001,
            "attendance_percentage": 96.5
        },
        {
            "date": "2023-10-18",
            "attendance": true,
            "wage": 27.71,
            "apr": 9.700000000000001,
            "ppi": 4.4,
            "sp": 8.700000000000001,
            "attendance_percentage": 96.52
        },
        {
            "date": "2023-10-19",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.8,
            "ppi": 4.5,
            "sp": 8.500000000000002,
            "attendance_percentage": 96.53
        },
        {
            "date": "2023-10-20",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.700000000000001,
            "ppi": 4.5,
            "sp": 8.300000000000002,
            "attendance_percentage": 96.55
        },
        {
            "date": "2023-10-21",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.600000000000001,
            "ppi": 4.5,
            "sp": 8.400000000000002,
            "attendance_percentage": 96.57
        },
        {
            "date": "2023-10-22",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.600000000000001,
            "ppi": 4.5,
            "sp": 8.200000000000003,
            "attendance_percentage": 96.59
        },
        {
            "date": "2023-10-23",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.8,
            "ppi": 4.5,
            "sp": 8.300000000000002,
            "attendance_percentage": 96.6
        },
        {
            "date": "2023-10-24",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.8,
            "ppi": 4.5,
            "sp": 8.500000000000002,
            "attendance_percentage": 96.62
        },
        {
            "date": "2023-10-25",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.700000000000001,
            "ppi": 4.5,
            "sp": 8.500000000000002,
            "attendance_percentage": 96.63
        },
        {
            "date": "2023-10-26",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.600000000000001,
            "ppi": 4.5,
            "sp": 8.700000000000001,
            "attendance_percentage": 96.65
        },
        {
            "date": "2023-10-27",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.700000000000001,
            "ppi": 4.4,
            "sp": 8.9,
            "attendance_percentage": 96.67
        },
        {
            "date": "2023-10-28",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.600000000000001,
            "ppi": 4.5,
            "sp": 9.1,
            "attendance_percentage": 96.68
        },
        {
            "date": "2023-10-29",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.700000000000001,
            "ppi": 4.5,
            "sp": 9.1,
            "attendance_percentage": 96.7
        },
        {
            "date": "2023-10-30",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.8,
            "ppi": 4.4,
            "sp": 8.9,
            "attendance_percentage": 96.71
        },
        {
            "date": "2023-10-31",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.8,
            "ppi": 4.2,
            "sp": 9.1,
            "attendance_percentage": 96.73
        },
        {
            "date": "2023-11-01",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.700000000000001,
            "ppi": 4.0,
            "sp": 9.2,
            "attendance_percentage": 96.74
        },
        {
            "date": "2023-11-02",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.8,
            "ppi": 4.2,
            "sp": 9.2,
            "attendance_percentage": 96.76
        },
        {
            "date": "2023-11-03",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.8,
            "ppi": 4.2,
            "sp": 9.0,
            "attendance_percentage": 96.77
        },
        {
            "date": "2023-11-04",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.8,
            "ppi": 4.4,
            "sp": 8.9,
            "attendance_percentage": 96.79
        },
        {
            "date": "2023-11-05",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.8,
            "ppi": 4.5,
            "sp": 9.200000000000001,
            "attendance_percentage": 96.8
        },
        {
            "date": "2023-11-06",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.8,
            "ppi": 4.3,
            "sp": 9.100000000000001,
            "attendance_percentage": 96.82
        },
        {
            "date": "2023-11-07",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.700000000000001,
            "ppi": 4.3999999999999995,
            "sp": 9.000000000000002,
            "attendance_percentage": 96.83
        },
        {
            "date": "2023-11-08",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.600000000000001,
            "ppi": 4.5,
            "sp": 9.000000000000002,
            "attendance_percentage": 96.85
        },
        {
            "date": "2023-11-09",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.700000000000001,
            "ppi": 4.4,
            "sp": 8.800000000000002,
            "attendance_percentage": 96.86
        },
        {
            "date": "2023-11-10",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.600000000000001,
            "ppi": 4.4,
            "sp": 8.700000000000003,
            "attendance_percentage": 96.88
        },
        {
            "date": "2023-11-11",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.8,
            "ppi": 4.5,
            "sp": 8.600000000000003,
            "attendance_percentage": 96.89
        },
        {
            "date": "2023-11-12",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.8,
            "ppi": 4.5,
            "sp": 8.400000000000004,
            "attendance_percentage": 96.9
        },
        {
            "date": "2023-11-13",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.8,
            "ppi": 4.5,
            "sp": 8.400000000000004,
            "attendance_percentage": 96.92
        },
        {
            "date": "2023-11-14",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.700000000000001,
            "ppi": 4.3,
            "sp": 8.200000000000005,
            "attendance_percentage": 96.93
        },
        {
            "date": "2023-11-15",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.600000000000001,
            "ppi": 4.1,
            "sp": 8.000000000000005,
            "attendance_percentage": 96.94
        },
        {
            "date": "2023-11-16",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.600000000000001,
            "ppi": 4.1,
            "sp": 8.300000000000006,
            "attendance_percentage": 96.96
        },
        {
            "date": "2023-11-17",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.600000000000001,
            "ppi": 3.9999999999999996,
            "sp": 8.300000000000006,
            "attendance_percentage": 96.97
        },
        {
            "date": "2023-11-18",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.700000000000001,
            "ppi": 3.7999999999999994,
            "sp": 8.200000000000006,
            "attendance_percentage": 96.98
        },
        {
            "date": "2023-11-19",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.700000000000001,
            "ppi": 3.599999999999999,
            "sp": 8.400000000000006,
            "attendance_percentage": 97.0
        },
        {
            "date": "2023-11-20",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.8,
            "ppi": 3.399999999999999,
            "sp": 8.200000000000006,
            "attendance_percentage": 97.01
        },
        {
            "date": "2023-11-21",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.700000000000001,
            "ppi": 3.299999999999999,
            "sp": 8.400000000000006,
            "attendance_percentage": 97.02
        },
        {
            "date": "2023-11-22",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.600000000000001,
            "ppi": 3.2,
            "sp": 8.400000000000006,
            "attendance_percentage": 97.03
        },
        {
            "date": "2023-11-23",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.400000000000002,
            "ppi": 3.2,
            "sp": 8.400000000000006,
            "attendance_percentage": 97.05
        },
        {
            "date": "2023-11-24",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.500000000000002,
            "ppi": 3.2,
            "sp": 8.600000000000005,
            "attendance_percentage": 97.06
        },
        {
            "date": "2023-11-25",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.500000000000002,
            "ppi": 3.2,
            "sp": 8.400000000000006,
            "attendance_percentage": 97.07
        },
        {
            "date": "2023-11-26",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.500000000000002,
            "ppi": 3.4000000000000004,
            "sp": 8.700000000000006,
            "attendance_percentage": 97.08
        },
        {
            "date": "2023-11-27",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.600000000000001,
            "ppi": 3.5000000000000004,
            "sp": 9.000000000000007,
            "attendance_percentage": 97.1
        },
        {
            "date": "2023-11-28",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.600000000000001,
            "ppi": 3.4000000000000004,
            "sp": 8.800000000000008,
            "attendance_percentage": 97.11
        },
        {
            "date": "2023-11-29",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.600000000000001,
            "ppi": 3.5000000000000004,
            "sp": 9.100000000000009,
            "attendance_percentage": 97.12
        },
        {
            "date": "2023-11-30",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.500000000000002,
            "ppi": 3.5000000000000004,
            "sp": 8.90000000000001,
            "attendance_percentage": 97.13
        },
        {
            "date": "2023-12-01",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.500000000000002,
            "ppi": 3.5000000000000004,
            "sp": 8.80000000000001,
            "attendance_percentage": 97.14
        },
        {
            "date": "2023-12-02",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.400000000000002,
            "ppi": 3.4000000000000004,
            "sp": 8.90000000000001,
            "attendance_percentage": 97.15
        },
        {
            "date": "2023-12-03",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.500000000000002,
            "ppi": 3.5000000000000004,
            "sp": 9.100000000000009,
            "attendance_percentage": 97.17
        },
        {
            "date": "2023-12-04",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.300000000000002,
            "ppi": 3.4000000000000004,
            "sp": 9.200000000000008,
            "attendance_percentage": 97.18
        },
        {
            "date": "2023-12-05",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.200000000000003,
            "ppi": 3.5000000000000004,
            "sp": 9.300000000000008,
            "attendance_percentage": 97.19
        },
        {
            "date": "2023-12-06",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.200000000000003,
            "ppi": 3.5000000000000004,
            "sp": 9.400000000000007,
            "attendance_percentage": 97.2
        },
        {
            "date": "2023-12-07",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.000000000000004,
            "ppi": 3.7000000000000006,
            "sp": 9.5,
            "attendance_percentage": 97.21
        },
        {
            "date": "2023-12-08",
            "attendance": true,
            "wage": 28.07,
            "apr": 8.900000000000004,
            "ppi": 3.7000000000000006,
            "sp": 9.5,
            "attendance_percentage": 97.22
        },
        {
            "date": "2023-12-09",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.000000000000004,
            "ppi": 3.6000000000000005,
            "sp": 9.2,
            "attendance_percentage": 97.23
        },
        {
            "date": "2023-12-10",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.100000000000003,
            "ppi": 3.5000000000000004,
            "sp": 9.0,
            "attendance_percentage": 97.24
        },
        {
            "date": "2023-12-11",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.000000000000004,
            "ppi": 3.6000000000000005,
            "sp": 9.1,
            "attendance_percentage": 97.25
        },
        {
            "date": "2023-12-12",
            "attendance": false,
            "wage": 28.07,
            "apr": 9.100000000000003,
            "ppi": 3.4000000000000004,
            "sp": 9.4,
            "attendance_percentage": 96.88
        },
        {
            "date": "2023-12-13",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.000000000000004,
            "ppi": 3.3000000000000003,
            "sp": 9.5,
            "attendance_percentage": 96.89
        },
        {
            "date": "2023-12-14",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.000000000000004,
            "ppi": 3.4000000000000004,
            "sp": 9.5,
            "attendance_percentage": 96.9
        },
        {
            "date": "2023-12-15",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.200000000000003,
            "ppi": 3.5000000000000004,
            "sp": 9.5,
            "attendance_percentage": 96.91
        },
        {
            "date": "2023-12-16",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.100000000000003,
            "ppi": 3.3000000000000003,
            "sp": 9.3,
            "attendance_percentage": 96.92
        },
        {
            "date": "2023-12-17",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.000000000000004,
            "ppi": 3.3000000000000003,
            "sp": 9.4,
            "attendance_percentage": 96.93
        },
        {
            "date": "2023-12-18",
            "attendance": true,
            "wage": 28.07,
            "apr": 8.900000000000004,
            "ppi": 3.4000000000000004,
            "sp": 9.3,
            "attendance_percentage": 96.95
        },
        {
            "date": "2023-12-19",
            "attendance": true,
            "wage": 28.07,
            "apr": 8.800000000000004,
            "ppi": 3.4000000000000004,
            "sp": 9.100000000000001,
            "attendance_percentage": 96.96
        },
        {
            "date": "2023-12-20",
            "attendance": true,
            "wage": 28.07,
            "apr": 8.700000000000005,
            "ppi": 3.4000000000000004,
            "sp": 9.100000000000001,
            "attendance_percentage": 96.97
        },
        {
            "date": "2023-12-21",
            "attendance": true,
            "wage": 28.07,
            "apr": 8.600000000000005,
            "ppi": 3.2,
            "sp": 9.3,
            "attendance_percentage": 96.98
        },
        {
            "date": "2023-12-22",
            "attendance": true,
            "wage": 28.07,
            "apr": 8.800000000000004,
            "ppi": 3.3000000000000003,
            "sp": 9.3,
            "attendance_percentage": 96.99
        },
        {
            "date": "2023-12-23",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.000000000000004,
            "ppi": 3.5000000000000004,
            "sp": 9.5,
            "attendance_percentage": 97.0
        },
        {
            "date": "2023-12-24",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.100000000000003,
            "ppi": 3.7000000000000006,
            "sp": 9.5,
            "attendance_percentage": 97.01
        },
        {
            "date": "2023-12-25",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.300000000000002,
            "ppi": 3.5000000000000004,
            "sp": 9.4,
            "attendance_percentage": 97.03
        },
        {
            "date": "2023-12-26",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.400000000000002,
            "ppi": 3.5000000000000004,
            "sp": 9.5,
            "attendance_percentage": 97.04
        },
        {
            "date": "2023-12-27",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.200000000000003,
            "ppi": 3.4000000000000004,
            "sp": 9.3,
            "attendance_percentage": 97.05
        },
        {
            "date": "2023-12-28",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.000000000000004,
            "ppi": 3.5000000000000004,
            "sp": 9.3,
            "attendance_percentage": 97.06
        },
        {
            "date": "2023-12-29",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.000000000000004,
            "ppi": 3.4000000000000004,
            "sp": 9.200000000000001,
            "attendance_percentage": 97.07
        },
        {
            "date": "2023-12-30",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.000000000000004,
            "ppi": 3.4000000000000004,
            "sp": 9.4,
            "attendance_percentage": 97.08
        },
        {
            "date": "2023-12-31",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.000000000000004,
            "ppi": 3.2,
            "sp": 9.5,
            "attendance_percentage": 97.09
        },
        {
            "date": "2024-01-01",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.100000000000003,
            "ppi": 3.2,
            "sp": 9.3,
            "attendance_percentage": 97.1
        },
        {
            "date": "2024-01-02",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.000000000000004,
            "ppi": 3.3000000000000003,
            "sp": 9.5,
            "attendance_percentage": 97.11
        },
        {
            "date": "2024-01-03",
            "attendance": true,
            "wage": 28.07,
            "apr": 8.900000000000004,
            "ppi": 3.2,
            "sp": 9.5,
            "attendance_percentage": 97.12
        },
        {
            "date": "2024-01-04",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.000000000000004,
            "ppi": 3.3000000000000003,
            "sp": 9.5,
            "attendance_percentage": 97.13
        },
        {
            "date": "2024-01-05",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.100000000000003,
            "ppi": 3.2,
            "sp": 9.5,
            "attendance_percentage": 97.14
        },
        {
            "date": "2024-01-06",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.300000000000002,
            "ppi": 3.4000000000000004,
            "sp": 9.3,
            "attendance_percentage": 97.15
        },
        {
            "date": "2024-01-07",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.200000000000003,
            "ppi": 3.3000000000000003,
            "sp": 9.200000000000001,
            "attendance_percentage": 97.16
        },
        {
            "date": "2024-01-08",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.400000000000002,
            "ppi": 3.3000000000000003,
            "sp": 8.9,
            "attendance_percentage": 97.17
        },
        {
            "date": "2024-01-09",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.400000000000002,
            "ppi": 3.2,
            "sp": 9.1,
            "attendance_percentage": 97.18
        },
        {
            "date": "2024-01-10",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.300000000000002,
            "ppi": 3.2,
            "sp": 9.0,
            "attendance_percentage": 97.19
        },
        {
            "date": "2024-01-11",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.200000000000003,
            "ppi": 3.3000000000000003,
            "sp": 8.9,
            "attendance_percentage": 97.2
        },
        {
            "date": "2024-01-12",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.200000000000003,
            "ppi": 3.5000000000000004,
            "sp": 8.9,
            "attendance_percentage": 97.21
        },
        {
            "date": "2024-01-13",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.200000000000003,
            "ppi": 3.6000000000000005,
            "sp": 8.9,
            "attendance_percentage": 97.22
        },
        {
            "date": "2024-01-14",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.300000000000002,
            "ppi": 3.7000000000000006,
            "sp": 8.700000000000001,
            "attendance_percentage": 97.23
        },
        {
            "date": "2024-01-15",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.400000000000002,
            "ppi": 3.7000000000000006,
            "sp": 8.600000000000001,
            "attendance_percentage": 97.24
        },
        {
            "date": "2024-01-16",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.300000000000002,
            "ppi": 3.6000000000000005,
            "sp": 8.500000000000002,
            "attendance_percentage": 97.25
        },
        {
            "date": "2024-01-17",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.500000000000002,
            "ppi": 3.4000000000000004,
            "sp": 8.400000000000002,
            "attendance_percentage": 97.26
        },
        {
            "date": "2024-01-18",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.500000000000002,
            "ppi": 3.2,
            "sp": 8.700000000000003,
            "attendance_percentage": 97.27
        },
        {
            "date": "2024-01-19",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.300000000000002,
            "ppi": 3.4000000000000004,
            "sp": 8.800000000000002,
            "attendance_percentage": 97.28
        },
        {
            "date": "2024-01-20",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.400000000000002,
            "ppi": 3.2,
            "sp": 9.100000000000003,
            "attendance_percentage": 97.29
        },
        {
            "date": "2024-01-21",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.300000000000002,
            "ppi": 3.2,
            "sp": 9.200000000000003,
            "attendance_percentage": 97.3
        },
        {
            "date": "2024-01-22",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.400000000000002,
            "ppi": 3.2,
            "sp": 9.5,
            "attendance_percentage": 97.31
        },
        {
            "date": "2024-01-23",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.500000000000002,
            "ppi": 3.2,
            "sp": 9.4,
            "attendance_percentage": 97.32
        },
        {
            "date": "2024-01-24",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.500000000000002,
            "ppi": 3.2,
            "sp": 9.3,
            "attendance_percentage": 97.32
        },
        {
            "date": "2024-01-25",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.400000000000002,
            "ppi": 3.2,
            "sp": 9.4,
            "attendance_percentage": 97.33
        },
        {
            "date": "2024-01-26",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.200000000000003,
            "ppi": 3.2,
            "sp": 9.1,
            "attendance_percentage": 97.34
        },
        {
            "date": "2024-01-27",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.100000000000003,
            "ppi": 3.2,
            "sp": 9.1,
            "attendance_percentage": 97.35
        },
        {
            "date": "2024-01-28",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.200000000000003,
            "ppi": 3.2,
            "sp": 9.2,
            "attendance_percentage": 97.36
        },
        {
            "date": "2024-01-29",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.200000000000003,
            "ppi": 3.2,
            "sp": 9.399999999999999,
            "attendance_percentage": 97.37
        },
        {
            "date": "2024-01-30",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.300000000000002,
            "ppi": 3.3000000000000003,
            "sp": 9.2,
            "attendance_percentage": 97.38
        },
        {
            "date": "2024-01-31",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.100000000000003,
            "ppi": 3.4000000000000004,
            "sp": 9.399999999999999,
            "attendance_percentage": 97.39
        },
        {
            "date": "2024-02-01",
            "attendance": true,
            "wage": 28.07,
            "apr": 9.200000000000003,
            "ppi": 3.5000000000000004,
            "sp": 9.499999999999998,
            "attendance_percentage": 97.39
        },
        {
            "date": "2024-02-02",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.100000000000003,
            "ppi": 3.5000000000000004,
            "sp": 9.399999999999999,
            "attendance_percentage": 97.4
        },
        {
            "date": "2024-02-03",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.100000000000003,
            "ppi": 3.4000000000000004,
            "sp": 9.299999999999999,
            "attendance_percentage": 97.41
        },
        {
            "date": "2024-02-04",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.100000000000003,
            "ppi": 3.4000000000000004,
            "sp": 9.2,
            "attendance_percentage": 97.42
        },
        {
            "date": "2024-02-05",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.100000000000003,
            "ppi": 3.3000000000000003,
            "sp": 9.399999999999999,
            "attendance_percentage": 97.43
        },
        {
            "date": "2024-02-06",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.300000000000002,
            "ppi": 3.2,
            "sp": 9.299999999999999,
            "attendance_percentage": 97.44
        },
        {
            "date": "2024-02-07",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.200000000000003,
            "ppi": 3.4000000000000004,
            "sp": 9.1,
            "attendance_percentage": 97.44
        },
        {
            "date": "2024-02-08",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.100000000000003,
            "ppi": 3.6000000000000005,
            "sp": 9.0,
            "attendance_percentage": 97.45
        },
        {
            "date": "2024-02-09",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.000000000000004,
            "ppi": 3.6000000000000005,
            "sp": 9.1,
            "attendance_percentage": 97.46
        },
        {
            "date": "2024-02-10",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.800000000000004,
            "ppi": 3.6000000000000005,
            "sp": 8.9,
            "attendance_percentage": 97.47
        },
        {
            "date": "2024-02-11",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.000000000000004,
            "ppi": 3.7000000000000006,
            "sp": 8.700000000000001,
            "attendance_percentage": 97.48
        },
        {
            "date": "2024-02-12",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.900000000000004,
            "ppi": 3.5000000000000004,
            "sp": 8.500000000000002,
            "attendance_percentage": 97.48
        },
        {
            "date": "2024-02-13",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.000000000000004,
            "ppi": 3.6000000000000005,
            "sp": 8.700000000000001,
            "attendance_percentage": 97.49
        },
        {
            "date": "2024-02-14",
            "attendance": false,
            "wage": 28.72,
            "apr": 9.100000000000003,
            "ppi": 3.6000000000000005,
            "sp": 8.700000000000001,
            "attendance_percentage": 97.19
        },
        {
            "date": "2024-02-15",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.300000000000002,
            "ppi": 3.5000000000000004,
            "sp": 8.500000000000002,
            "attendance_percentage": 97.2
        },
        {
            "date": "2024-02-16",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.200000000000003,
            "ppi": 3.5000000000000004,
            "sp": 8.300000000000002,
            "attendance_percentage": 97.2
        },
        {
            "date": "2024-02-17",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.200000000000003,
            "ppi": 3.5000000000000004,
            "sp": 8.200000000000003,
            "attendance_percentage": 97.21
        },
        {
            "date": "2024-02-18",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.300000000000002,
            "ppi": 3.3000000000000003,
            "sp": 8.200000000000003,
            "attendance_percentage": 97.22
        },
        {
            "date": "2024-02-19",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.400000000000002,
            "ppi": 3.3000000000000003,
            "sp": 8.400000000000002,
            "attendance_percentage": 97.23
        },
        {
            "date": "2024-02-20",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.300000000000002,
            "ppi": 3.4000000000000004,
            "sp": 8.500000000000002,
            "attendance_percentage": 97.24
        },
        {
            "date": "2024-02-21",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.400000000000002,
            "ppi": 3.5000000000000004,
            "sp": 8.200000000000001,
            "attendance_percentage": 97.25
        },
        {
            "date": "2024-02-22",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.400000000000002,
            "ppi": 3.4000000000000004,
            "sp": 8.4,
            "attendance_percentage": 97.26
        },
        {
            "date": "2024-02-23",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.300000000000002,
            "ppi": 3.4000000000000004,
            "sp": 8.200000000000001,
            "attendance_percentage": 97.26
        },
        {
            "date": "2024-02-24",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.300000000000002,
            "ppi": 3.5000000000000004,
            "sp": 8.000000000000002,
            "attendance_percentage": 97.27
        },
        {
            "date": "2024-02-25",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.300000000000002,
            "ppi": 3.5000000000000004,
            "sp": 7.700000000000002,
            "attendance_percentage": 97.28
        },
        {
            "date": "2024-02-26",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.300000000000002,
            "ppi": 3.5000000000000004,
            "sp": 7.900000000000002,
            "attendance_percentage": 97.29
        },
        {
            "date": "2024-02-27",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.200000000000003,
            "ppi": 3.6000000000000005,
            "sp": 8.100000000000001,
            "attendance_percentage": 97.3
        },
        {
            "date": "2024-02-28",
            "attendance": false,
            "wage": 28.72,
            "apr": 9.300000000000002,
            "ppi": 3.7000000000000006,
            "sp": 8.000000000000002,
            "attendance_percentage": 97.01
        },
        {
            "date": "2024-02-29",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.100000000000003,
            "ppi": 3.8000000000000007,
            "sp": 7.800000000000002,
            "attendance_percentage": 97.01
        },
        {
            "date": "2024-03-01",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.900000000000004,
            "ppi": 3.7000000000000006,
            "sp": 7.600000000000001,
            "attendance_percentage": 97.02
        },
        {
            "date": "2024-03-02",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.900000000000004,
            "ppi": 3.8000000000000007,
            "sp": 7.400000000000001,
            "attendance_percentage": 97.03
        },
        {
            "date": "2024-03-03",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.700000000000005,
            "ppi": 3.8000000000000007,
            "sp": 7.400000000000001,
            "attendance_percentage": 97.04
        },
        {
            "date": "2024-03-04",
            "attendance": false,
            "wage": 28.72,
            "apr": 8.700000000000005,
            "ppi": 3.8000000000000007,
            "sp": 7.300000000000002,
            "attendance_percentage": 96.76
        },
        {
            "date": "2024-03-05",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.800000000000004,
            "ppi": 3.8000000000000007,
            "sp": 7.2,
            "attendance_percentage": 96.76
        },
        {
            "date": "2024-03-06",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.700000000000005,
            "ppi": 3.7000000000000006,
            "sp": 7.5,
            "attendance_percentage": 96.77
        },
        {
            "date": "2024-03-07",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.800000000000004,
            "ppi": 3.6000000000000005,
            "sp": 7.2,
            "attendance_percentage": 96.78
        },
        {
            "date": "2024-03-08",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.700000000000005,
            "ppi": 3.5000000000000004,
            "sp": 7.2,
            "attendance_percentage": 96.79
        },
        {
            "date": "2024-03-09",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.600000000000005,
            "ppi": 3.6000000000000005,
            "sp": 7.2,
            "attendance_percentage": 96.8
        },
        {
            "date": "2024-03-10",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.800000000000004,
            "ppi": 3.8000000000000007,
            "sp": 7.5,
            "attendance_percentage": 96.81
        },
        {
            "date": "2024-03-11",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.800000000000004,
            "ppi": 3.8000000000000007,
            "sp": 7.2,
            "attendance_percentage": 96.82
        },
        {
            "date": "2024-03-12",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.700000000000005,
            "ppi": 4.000000000000001,
            "sp": 7.2,
            "attendance_percentage": 96.83
        },
        {
            "date": "2024-03-13",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.600000000000005,
            "ppi": 4.200000000000001,
            "sp": 7.2,
            "attendance_percentage": 96.84
        },
        {
            "date": "2024-03-14",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.400000000000006,
            "ppi": 4.200000000000001,
            "sp": 7.3,
            "attendance_percentage": 96.85
        },
        {
            "date": "2024-03-15",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.200000000000006,
            "ppi": 4.100000000000001,
            "sp": 7.5,
            "attendance_percentage": 96.86
        },
        {
            "date": "2024-03-16",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.300000000000006,
            "ppi": 4.000000000000002,
            "sp": 7.2,
            "attendance_percentage": 96.87
        },
        {
            "date": "2024-03-17",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.300000000000006,
            "ppi": 3.8000000000000016,
            "sp": 7.2,
            "attendance_percentage": 96.88
        },
        {
            "date": "2024-03-18",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.2,
            "ppi": 3.9000000000000017,
            "sp": 7.4,
            "attendance_percentage": 96.88
        },
        {
            "date": "2024-03-19",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.299999999999999,
            "ppi": 4.000000000000002,
            "sp": 7.6000000000000005,
            "attendance_percentage": 96.89
        },
        {
            "date": "2024-03-20",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.2,
            "ppi": 4.200000000000002,
            "sp": 7.9,
            "attendance_percentage": 96.9
        },
        {
            "date": "2024-03-21",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.399999999999999,
            "ppi": 4.300000000000002,
            "sp": 7.7,
            "attendance_percentage": 96.91
        },
        {
            "date": "2024-03-22",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.399999999999999,
            "ppi": 4.200000000000002,
            "sp": 7.6000000000000005,
            "attendance_percentage": 96.92
        },
        {
            "date": "2024-03-23",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.299999999999999,
            "ppi": 4.200000000000002,
            "sp": 7.9,
            "attendance_percentage": 96.93
        },
        {
            "date": "2024-03-24",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.399999999999999,
            "ppi": 4.200000000000002,
            "sp": 7.9,
            "attendance_percentage": 96.94
        },
        {
            "date": "2024-03-25",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.2,
            "ppi": 4.400000000000002,
            "sp": 7.9,
            "attendance_percentage": 96.94
        },
        {
            "date": "2024-03-26",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.2,
            "ppi": 4.3000000000000025,
            "sp": 7.6000000000000005,
            "attendance_percentage": 96.95
        },
        {
            "date": "2024-03-27",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.2,
            "ppi": 4.100000000000002,
            "sp": 7.4,
            "attendance_percentage": 96.96
        },
        {
            "date": "2024-03-28",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.2,
            "ppi": 4.100000000000002,
            "sp": 7.7,
            "attendance_percentage": 96.97
        },
        {
            "date": "2024-03-29",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.2,
            "ppi": 3.900000000000002,
            "sp": 7.7,
            "attendance_percentage": 96.98
        },
        {
            "date": "2024-03-30",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.2,
            "ppi": 4.000000000000002,
            "sp": 7.8,
            "attendance_percentage": 96.99
        },
        {
            "date": "2024-03-31",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.299999999999999,
            "ppi": 3.9000000000000017,
            "sp": 7.7,
            "attendance_percentage": 96.99
        },
        {
            "date": "2024-04-01",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.399999999999999,
            "ppi": 4.100000000000001,
            "sp": 7.6000000000000005,
            "attendance_percentage": 97.0
        },
        {
            "date": "2024-04-02",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.2,
            "ppi": 4.300000000000002,
            "sp": 7.6000000000000005,
            "attendance_percentage": 97.01
        },
        {
            "date": "2024-04-03",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.399999999999999,
            "ppi": 4.400000000000001,
            "sp": 7.7,
            "attendance_percentage": 97.02
        },
        {
            "date": "2024-04-04",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.499999999999998,
            "ppi": 4.200000000000001,
            "sp": 7.8,
            "attendance_percentage": 97.03
        },
        {
            "date": "2024-04-05",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.399999999999999,
            "ppi": 4.400000000000001,
            "sp": 7.6,
            "attendance_percentage": 97.04
        },
        {
            "date": "2024-04-06",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.299999999999999,
            "ppi": 4.400000000000001,
            "sp": 7.8,
            "attendance_percentage": 97.04
        },
        {
            "date": "2024-04-07",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.499999999999998,
            "ppi": 4.5,
            "sp": 7.5,
            "attendance_percentage": 97.05
        },
        {
            "date": "2024-04-08",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.399999999999999,
            "ppi": 4.3,
            "sp": 7.8,
            "attendance_percentage": 97.06
        },
        {
            "date": "2024-04-09",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.399999999999999,
            "ppi": 4.3,
            "sp": 7.5,
            "attendance_percentage": 97.07
        },
        {
            "date": "2024-04-10",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.499999999999998,
            "ppi": 4.5,
            "sp": 7.6,
            "attendance_percentage": 97.07
        },
        {
            "date": "2024-04-11",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.399999999999999,
            "ppi": 4.4,
            "sp": 7.8999999999999995,
            "attendance_percentage": 97.08
        },
        {
            "date": "2024-04-12",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.499999999999998,
            "ppi": 4.5,
            "sp": 8.1,
            "attendance_percentage": 97.09
        },
        {
            "date": "2024-04-13",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.499999999999998,
            "ppi": 4.4,
            "sp": 8.4,
            "attendance_percentage": 97.1
        },
        {
            "date": "2024-04-14",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.499999999999998,
            "ppi": 4.4,
            "sp": 8.200000000000001,
            "attendance_percentage": 97.11
        },
        {
            "date": "2024-04-15",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.599999999999998,
            "ppi": 4.5,
            "sp": 8.4,
            "attendance_percentage": 97.11
        },
        {
            "date": "2024-04-16",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.599999999999998,
            "ppi": 4.5,
            "sp": 8.5,
            "attendance_percentage": 97.12
        },
        {
            "date": "2024-04-17",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.599999999999998,
            "ppi": 4.5,
            "sp": 8.5,
            "attendance_percentage": 97.13
        },
        {
            "date": "2024-04-18",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.699999999999998,
            "ppi": 4.5,
            "sp": 8.3,
            "attendance_percentage": 97.14
        },
        {
            "date": "2024-04-19",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.799999999999997,
            "ppi": 4.4,
            "sp": 8.5,
            "attendance_percentage": 97.14
        },
        {
            "date": "2024-04-20",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.799999999999997,
            "ppi": 4.5,
            "sp": 8.7,
            "attendance_percentage": 97.15
        },
        {
            "date": "2024-04-21",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.699999999999998,
            "ppi": 4.4,
            "sp": 8.399999999999999,
            "attendance_percentage": 97.16
        },
        {
            "date": "2024-04-22",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.699999999999998,
            "ppi": 4.5,
            "sp": 8.099999999999998,
            "attendance_percentage": 97.16
        },
        {
            "date": "2024-04-23",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.799999999999997,
            "ppi": 4.5,
            "sp": 7.999999999999998,
            "attendance_percentage": 97.17
        },
        {
            "date": "2024-04-24",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.599999999999998,
            "ppi": 4.3,
            "sp": 8.199999999999998,
            "attendance_percentage": 97.18
        },
        {
            "date": "2024-04-25",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.599999999999998,
            "ppi": 4.2,
            "sp": 8.499999999999998,
            "attendance_percentage": 97.19
        },
        {
            "date": "2024-04-26",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.599999999999998,
            "ppi": 4.4,
            "sp": 8.599999999999998,
            "attendance_percentage": 97.19
        },
        {
            "date": "2024-04-27",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.699999999999998,
            "ppi": 4.5,
            "sp": 8.499999999999998,
            "attendance_percentage": 97.2
        },
        {
            "date": "2024-04-28",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.899999999999997,
            "ppi": 4.3,
            "sp": 8.699999999999998,
            "attendance_percentage": 97.21
        },
        {
            "date": "2024-04-29",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.799999999999997,
            "ppi": 4.3999999999999995,
            "sp": 8.599999999999998,
            "attendance_percentage": 97.22
        },
        {
            "date": "2024-04-30",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.899999999999997,
            "ppi": 4.199999999999999,
            "sp": 8.499999999999998,
            "attendance_percentage": 97.22
        },
        {
            "date": "2024-05-01",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.799999999999997,
            "ppi": 4.199999999999999,
            "sp": 8.399999999999999,
            "attendance_percentage": 97.23
        },
        {
            "date": "2024-05-02",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.599999999999998,
            "ppi": 4.3999999999999995,
            "sp": 8.099999999999998,
            "attendance_percentage": 97.24
        },
        {
            "date": "2024-05-03",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.699999999999998,
            "ppi": 4.499999999999999,
            "sp": 7.899999999999998,
            "attendance_percentage": 97.24
        },
        {
            "date": "2024-05-04",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.699999999999998,
            "ppi": 4.499999999999999,
            "sp": 7.6999999999999975,
            "attendance_percentage": 97.25
        },
        {
            "date": "2024-05-05",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.799999999999997,
            "ppi": 4.299999999999999,
            "sp": 7.999999999999997,
            "attendance_percentage": 97.26
        },
        {
            "date": "2024-05-06",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.799999999999997,
            "ppi": 4.299999999999999,
            "sp": 8.099999999999998,
            "attendance_percentage": 97.26
        },
        {
            "date": "2024-05-07",
            "attendance": false,
            "wage": 28.72,
            "apr": 8.799999999999997,
            "ppi": 4.399999999999999,
            "sp": 7.899999999999998,
            "attendance_percentage": 97.02
        },
        {
            "date": "2024-05-08",
            "attendance": false,
            "wage": 28.72,
            "apr": 8.699999999999998,
            "ppi": 4.499999999999998,
            "sp": 7.799999999999998,
            "attendance_percentage": 96.78
        },
        {
            "date": "2024-05-09",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.799999999999997,
            "ppi": 4.299999999999998,
            "sp": 7.899999999999998,
            "attendance_percentage": 96.79
        },
        {
            "date": "2024-05-10",
            "attendance": true,
            "wage": 28.72,
            "apr": 8.999999999999996,
            "ppi": 4.399999999999998,
            "sp": 7.899999999999998,
            "attendance_percentage": 96.8
        },
        {
            "date": "2024-05-11",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.099999999999996,
            "ppi": 4.299999999999998,
            "sp": 7.999999999999997,
            "attendance_percentage": 96.81
        },
        {
            "date": "2024-05-12",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.199999999999996,
            "ppi": 4.199999999999998,
            "sp": 7.799999999999997,
            "attendance_percentage": 96.81
        },
        {
            "date": "2024-05-13",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.299999999999995,
            "ppi": 4.299999999999998,
            "sp": 7.999999999999997,
            "attendance_percentage": 96.82
        },
        {
            "date": "2024-05-14",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.499999999999995,
            "ppi": 4.299999999999998,
            "sp": 8.099999999999998,
            "attendance_percentage": 96.83
        },
        {
            "date": "2024-05-15",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.599999999999994,
            "ppi": 4.199999999999998,
            "sp": 8.099999999999998,
            "attendance_percentage": 96.84
        },
        {
            "date": "2024-05-16",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.799999999999994,
            "ppi": 4.199999999999998,
            "sp": 8.099999999999998,
            "attendance_percentage": 96.84
        },
        {
            "date": "2024-05-17",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.699999999999994,
            "ppi": 4.099999999999999,
            "sp": 8.299999999999997,
            "attendance_percentage": 96.85
        },
        {
            "date": "2024-05-18",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.599999999999994,
            "ppi": 4.099999999999999,
            "sp": 8.199999999999998,
            "attendance_percentage": 96.86
        },
        {
            "date": "2024-05-19",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.599999999999994,
            "ppi": 3.9999999999999987,
            "sp": 7.999999999999997,
            "attendance_percentage": 96.87
        },
        {
            "date": "2024-05-20",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.499999999999995,
            "ppi": 3.7999999999999985,
            "sp": 7.899999999999998,
            "attendance_percentage": 96.88
        },
        {
            "date": "2024-05-21",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.599999999999994,
            "ppi": 3.5999999999999983,
            "sp": 7.999999999999997,
            "attendance_percentage": 96.88
        },
        {
            "date": "2024-05-22",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.399999999999995,
            "ppi": 3.5999999999999983,
            "sp": 7.999999999999997,
            "attendance_percentage": 96.89
        },
        {
            "date": "2024-05-23",
            "attendance": true,
            "wage": 28.72,
            "apr": 9.299999999999995,
            "ppi": 3.6999999999999984,
            "sp": 8.099999999999998,
            "attendance_percentage": 96.9
        },
        {
            "date": "2024-05-24",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.299999999999995,
            "ppi": 3.7999999999999985,
            "sp": 8.099999999999998,
            "attendance_percentage": 96.9
        },
        {
            "date": "2024-05-25",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.299999999999995,
            "ppi": 3.6999999999999984,
            "sp": 8.199999999999998,
            "attendance_percentage": 96.91
        },
        {
            "date": "2024-05-26",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.499999999999995,
            "ppi": 3.7999999999999985,
            "sp": 8.399999999999997,
            "attendance_percentage": 96.92
        },
        {
            "date": "2024-05-27",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.499999999999995,
            "ppi": 3.6999999999999984,
            "sp": 8.299999999999997,
            "attendance_percentage": 96.93
        },
        {
            "date": "2024-05-28",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.599999999999994,
            "ppi": 3.5999999999999983,
            "sp": 7.999999999999997,
            "attendance_percentage": 96.93
        },
        {
            "date": "2024-05-29",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.599999999999994,
            "ppi": 3.5999999999999983,
            "sp": 7.999999999999997,
            "attendance_percentage": 96.94
        },
        {
            "date": "2024-05-30",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.399999999999995,
            "ppi": 3.399999999999998,
            "sp": 7.999999999999997,
            "attendance_percentage": 96.95
        },
        {
            "date": "2024-05-31",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.399999999999995,
            "ppi": 3.5999999999999983,
            "sp": 7.899999999999998,
            "attendance_percentage": 96.96
        },
        {
            "date": "2024-06-01",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.299999999999995,
            "ppi": 3.5999999999999983,
            "sp": 7.999999999999997,
            "attendance_percentage": 96.96
        },
        {
            "date": "2024-06-02",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.399999999999995,
            "ppi": 3.399999999999998,
            "sp": 7.899999999999998,
            "attendance_percentage": 96.97
        },
        {
            "date": "2024-06-03",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.199999999999996,
            "ppi": 3.4999999999999982,
            "sp": 7.899999999999998,
            "attendance_percentage": 96.98
        },
        {
            "date": "2024-06-04",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.199999999999996,
            "ppi": 3.5999999999999983,
            "sp": 7.799999999999998,
            "attendance_percentage": 96.98
        },
        {
            "date": "2024-06-05",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.299999999999995,
            "ppi": 3.7999999999999985,
            "sp": 7.899999999999998,
            "attendance_percentage": 96.99
        },
        {
            "date": "2024-06-06",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.099999999999996,
            "ppi": 3.6999999999999984,
            "sp": 8.199999999999998,
            "attendance_percentage": 97.0
        },
        {
            "date": "2024-06-07",
            "attendance": true,
            "wage": 29.43,
            "apr": 8.899999999999997,
            "ppi": 3.8999999999999986,
            "sp": 8.099999999999998,
            "attendance_percentage": 97.0
        },
        {
            "date": "2024-06-08",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.099999999999996,
            "ppi": 3.7999999999999985,
            "sp": 7.899999999999998,
            "attendance_percentage": 97.01
        },
        {
            "date": "2024-06-09",
            "attendance": true,
            "wage": 29.43,
            "apr": 8.999999999999996,
            "ppi": 3.6999999999999984,
            "sp": 7.899999999999998,
            "attendance_percentage": 97.02
        },
        {
            "date": "2024-06-10",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.199999999999996,
            "ppi": 3.7999999999999985,
            "sp": 8.099999999999998,
            "attendance_percentage": 97.03
        },
        {
            "date": "2024-06-11",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.099999999999996,
            "ppi": 3.5999999999999983,
            "sp": 8.199999999999998,
            "attendance_percentage": 97.03
        },
        {
            "date": "2024-06-12",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.099999999999996,
            "ppi": 3.6999999999999984,
            "sp": 7.999999999999997,
            "attendance_percentage": 97.04
        },
        {
            "date": "2024-06-13",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.199999999999996,
            "ppi": 3.5999999999999983,
            "sp": 8.199999999999998,
            "attendance_percentage": 97.05
        },
        {
            "date": "2024-06-14",
            "attendance": false,
            "wage": 29.43,
            "apr": 9.399999999999995,
            "ppi": 3.6999999999999984,
            "sp": 8.399999999999997,
            "attendance_percentage": 96.83
        },
        {
            "date": "2024-06-15",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.299999999999995,
            "ppi": 3.7999999999999985,
            "sp": 8.499999999999996,
            "attendance_percentage": 96.83
        },
        {
            "date": "2024-06-16",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.199999999999996,
            "ppi": 3.9999999999999987,
            "sp": 8.299999999999997,
            "attendance_percentage": 96.84
        },
        {
            "date": "2024-06-17",
            "attendance": true,
            "wage": 29.43,
            "apr": 8.999999999999996,
            "ppi": 3.7999999999999985,
            "sp": 8.399999999999997,
            "attendance_percentage": 96.85
        },
        {
            "date": "2024-06-18",
            "attendance": true,
            "wage": 29.43,
            "apr": 8.799999999999997,
            "ppi": 3.9999999999999987,
            "sp": 8.399999999999997,
            "attendance_percentage": 96.85
        },
        {
            "date": "2024-06-19",
            "attendance": true,
            "wage": 29.43,
            "apr": 8.699999999999998,
            "ppi": 4.199999999999998,
            "sp": 8.199999999999998,
            "attendance_percentage": 96.86
        },
        {
            "date": "2024-06-20",
            "attendance": true,
            "wage": 29.43,
            "apr": 8.899999999999997,
            "ppi": 4.399999999999999,
            "sp": 8.199999999999998,
            "attendance_percentage": 96.87
        },
        {
            "date": "2024-06-21",
            "attendance": true,
            "wage": 29.43,
            "apr": 8.699999999999998,
            "ppi": 4.199999999999998,
            "sp": 8.199999999999998,
            "attendance_percentage": 96.88
        },
        {
            "date": "2024-06-22",
            "attendance": true,
            "wage": 29.43,
            "apr": 8.899999999999997,
            "ppi": 4.099999999999999,
            "sp": 7.999999999999997,
            "attendance_percentage": 96.88
        },
        {
            "date": "2024-06-23",
            "attendance": true,
            "wage": 29.43,
            "apr": 8.899999999999997,
            "ppi": 4.099999999999999,
            "sp": 8.299999999999997,
            "attendance_percentage": 96.89
        },
        {
            "date": "2024-06-24",
            "attendance": true,
            "wage": 29.43,
            "apr": 8.799999999999997,
            "ppi": 4.199999999999998,
            "sp": 8.499999999999996,
            "attendance_percentage": 96.9
        },
        {
            "date": "2024-06-25",
            "attendance": true,
            "wage": 29.43,
            "apr": 8.799999999999997,
            "ppi": 4.299999999999998,
            "sp": 8.299999999999997,
            "attendance_percentage": 96.9
        },
        {
            "date": "2024-06-26",
            "attendance": true,
            "wage": 29.43,
            "apr": 8.799999999999997,
            "ppi": 4.199999999999998,
            "sp": 8.299999999999997,
            "attendance_percentage": 96.91
        },
        {
            "date": "2024-06-27",
            "attendance": true,
            "wage": 29.43,
            "apr": 8.999999999999996,
            "ppi": 4.199999999999998,
            "sp": 8.499999999999996,
            "attendance_percentage": 96.92
        },
        {
            "date": "2024-06-28",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.199999999999996,
            "ppi": 3.9999999999999982,
            "sp": 8.799999999999997,
            "attendance_percentage": 96.92
        },
        {
            "date": "2024-06-29",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.299999999999995,
            "ppi": 4.199999999999998,
            "sp": 8.899999999999997,
            "attendance_percentage": 96.93
        },
        {
            "date": "2024-06-30",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.499999999999995,
            "ppi": 3.9999999999999982,
            "sp": 8.799999999999997,
            "attendance_percentage": 96.94
        },
        {
            "date": "2024-07-01",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.399999999999995,
            "ppi": 4.099999999999998,
            "sp": 8.899999999999997,
            "attendance_percentage": 96.94
        },
        {
            "date": "2024-07-02",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.399999999999995,
            "ppi": 4.1999999999999975,
            "sp": 9.099999999999996,
            "attendance_percentage": 96.95
        },
        {
            "date": "2024-07-03",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.399999999999995,
            "ppi": 4.1999999999999975,
            "sp": 9.399999999999997,
            "attendance_percentage": 96.96
        },
        {
            "date": "2024-07-04",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.499999999999995,
            "ppi": 4.299999999999997,
            "sp": 9.199999999999998,
            "attendance_percentage": 96.96
        },
        {
            "date": "2024-07-05",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.399999999999995,
            "ppi": 4.499999999999997,
            "sp": 9.299999999999997,
            "attendance_percentage": 96.97
        },
        {
            "date": "2024-07-06",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.399999999999995,
            "ppi": 4.5,
            "sp": 8.999999999999996,
            "attendance_percentage": 96.98
        },
        {
            "date": "2024-07-07",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.599999999999994,
            "ppi": 4.4,
            "sp": 9.199999999999996,
            "attendance_percentage": 96.98
        },
        {
            "date": "2024-07-08",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.699999999999994,
            "ppi": 4.300000000000001,
            "sp": 9.499999999999996,
            "attendance_percentage": 96.99
        },
        {
            "date": "2024-07-09",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.599999999999994,
            "ppi": 4.1000000000000005,
            "sp": 9.499999999999996,
            "attendance_percentage": 97.0
        },
        {
            "date": "2024-07-10",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.499999999999995,
            "ppi": 4.1000000000000005,
            "sp": 9.499999999999996,
            "attendance_percentage": 97.0
        },
        {
            "date": "2024-07-11",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.599999999999994,
            "ppi": 4.000000000000001,
            "sp": 9.5,
            "attendance_percentage": 97.01
        },
        {
            "date": "2024-07-12",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.599999999999994,
            "ppi": 3.900000000000001,
            "sp": 9.2,
            "attendance_percentage": 97.01
        },
        {
            "date": "2024-07-13",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.699999999999994,
            "ppi": 4.000000000000001,
            "sp": 8.899999999999999,
            "attendance_percentage": 97.02
        },
        {
            "date": "2024-07-14",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.599999999999994,
            "ppi": 4.200000000000001,
            "sp": 9.099999999999998,
            "attendance_percentage": 97.03
        },
        {
            "date": "2024-07-15",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.499999999999995,
            "ppi": 4.200000000000001,
            "sp": 8.899999999999999,
            "attendance_percentage": 97.03
        },
        {
            "date": "2024-07-16",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.499999999999995,
            "ppi": 4.100000000000001,
            "sp": 8.999999999999998,
            "attendance_percentage": 97.04
        },
        {
            "date": "2024-07-17",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.699999999999994,
            "ppi": 4.300000000000002,
            "sp": 8.799999999999999,
            "attendance_percentage": 97.05
        },
        {
            "date": "2024-07-18",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.599999999999994,
            "ppi": 4.200000000000002,
            "sp": 8.6,
            "attendance_percentage": 97.05
        },
        {
            "date": "2024-07-19",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.699999999999994,
            "ppi": 4.000000000000002,
            "sp": 8.4,
            "attendance_percentage": 97.06
        },
        {
            "date": "2024-07-20",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.599999999999994,
            "ppi": 4.100000000000001,
            "sp": 8.3,
            "attendance_percentage": 97.06
        },
        {
            "date": "2024-07-21",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.699999999999994,
            "ppi": 4.000000000000002,
            "sp": 8.200000000000001,
            "attendance_percentage": 97.07
        },
        {
            "date": "2024-07-22",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.599999999999994,
            "ppi": 3.9000000000000017,
            "sp": 8.100000000000001,
            "attendance_percentage": 97.08
        },
        {
            "date": "2024-07-23",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.399999999999995,
            "ppi": 3.8000000000000016,
            "sp": 8.100000000000001,
            "attendance_percentage": 97.08
        },
        {
            "date": "2024-07-24",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.299999999999995,
            "ppi": 3.8000000000000016,
            "sp": 8.200000000000001,
            "attendance_percentage": 97.09
        },
        {
            "date": "2024-07-25",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.399999999999995,
            "ppi": 3.8000000000000016,
            "sp": 8.100000000000001,
            "attendance_percentage": 97.1
        },
        {
            "date": "2024-07-26",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.299999999999995,
            "ppi": 3.7000000000000015,
            "sp": 8.200000000000001,
            "attendance_percentage": 97.1
        },
        {
            "date": "2024-07-27",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.399999999999995,
            "ppi": 3.6000000000000014,
            "sp": 8.500000000000002,
            "attendance_percentage": 97.11
        },
        {
            "date": "2024-07-28",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.199999999999996,
            "ppi": 3.5000000000000013,
            "sp": 8.400000000000002,
            "attendance_percentage": 97.11
        },
        {
            "date": "2024-07-29",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.299999999999995,
            "ppi": 3.6000000000000014,
            "sp": 8.300000000000002,
            "attendance_percentage": 97.12
        },
        {
            "date": "2024-07-30",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.399999999999995,
            "ppi": 3.7000000000000015,
            "sp": 8.400000000000002,
            "attendance_percentage": 97.13
        },
        {
            "date": "2024-07-31",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.299999999999995,
            "ppi": 3.7000000000000015,
            "sp": 8.400000000000002,
            "attendance_percentage": 97.13
        },
        {
            "date": "2024-08-01",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.099999999999996,
            "ppi": 3.8000000000000016,
            "sp": 8.200000000000003,
            "attendance_percentage": 97.14
        },
        {
            "date": "2024-08-02",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.099999999999996,
            "ppi": 3.9000000000000017,
            "sp": 8.300000000000002,
            "attendance_percentage": 97.14
        },
        {
            "date": "2024-08-03",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.199999999999996,
            "ppi": 3.8000000000000016,
            "sp": 8.200000000000003,
            "attendance_percentage": 97.15
        },
        {
            "date": "2024-08-04",
            "attendance": true,
            "wage": 29.43,
            "apr": 8.999999999999996,
            "ppi": 3.7000000000000015,
            "sp": 7.900000000000003,
            "attendance_percentage": 97.15
        },
        {
            "date": "2024-08-05",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.099999999999996,
            "ppi": 3.9000000000000017,
            "sp": 8.100000000000003,
            "attendance_percentage": 97.16
        },
        {
            "date": "2024-08-06",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.299999999999995,
            "ppi": 3.8000000000000016,
            "sp": 7.900000000000003,
            "attendance_percentage": 97.17
        },
        {
            "date": "2024-08-07",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.299999999999995,
            "ppi": 3.9000000000000017,
            "sp": 8.100000000000003,
            "attendance_percentage": 97.17
        },
        {
            "date": "2024-08-08",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.199999999999996,
            "ppi": 3.7000000000000015,
            "sp": 8.100000000000003,
            "attendance_percentage": 97.18
        },
        {
            "date": "2024-08-09",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.299999999999995,
            "ppi": 3.7000000000000015,
            "sp": 8.400000000000004,
            "attendance_percentage": 97.18
        },
        {
            "date": "2024-08-10",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.299999999999995,
            "ppi": 3.6000000000000014,
            "sp": 8.600000000000003,
            "attendance_percentage": 97.19
        },
        {
            "date": "2024-08-11",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.499999999999995,
            "ppi": 3.4000000000000012,
            "sp": 8.300000000000002,
            "attendance_percentage": 97.19
        },
        {
            "date": "2024-08-12",
            "attendance": true,
            "wage": 29.43,
            "apr": 9.499999999999995,
            "ppi": 3.5000000000000013,
            "sp": 8.300000000000002,
            "attendance_percentage": 97.2
        }
    ]

    return NextResponse.json(attendance);
}
