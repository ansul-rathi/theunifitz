import React from 'react';

const classTypes = {
  morningFlow: {
    name: 'Morning Flow',
    subtitle: 'Advanced Sequence',
    bgColor: 'bg-teal-200',
  },
  kundalini: {
    name: 'Kundalini Yoga',
    subtitle: 'Basic Kundalini',
    bgColor: 'bg-amber-200',
  },
  ashtanga: {
    name: 'Ashtanga Yoga',
    subtitle: 'Weight Loss',
    bgColor: 'bg-pink-300',
  },
  yogaDance: {
    name: 'Yoga Dance',
    subtitle: 'Cardio Fit',
    bgColor: 'bg-blue-300',
  },
  hatha: {
    name: 'Hatha Yoga',
    subtitle: 'Weekend Class',
    bgColor: 'bg-orange-200',
  },
};

const ClassBlock = ({ type, time, instructor }) => (
  <div className={`p-4 ${type.bgColor}`}>
    <div className="font-medium">{type.name}</div>
    <div className="text-sm text-gray-600">{type.subtitle}</div>
    <div className="text-sm mt-2">{time}</div>
    <div className="text-sm text-gray-600">{instructor}</div>
  </div>
);

const Timetable = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl text-center mb-8 text-gray-700">Classes Timetable</h1>
      
      {/* Filter Tabs */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {['All Events', 'Hatha Yoga', 'Yoga Dance', 'Ashtanga Yoga', 'Kundalini Yoga', 'Morning Flow'].map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 whitespace-nowrap hover:bg-gray-100 rounded-lg focus:outline-none"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Timetable Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          {/* Header */}
          <div className="grid grid-cols-8 gap-1 mb-1">
            <div className="p-4"></div>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <div key={day} className="p-4 text-center font-medium bg-white">
                {day}
              </div>
            ))}
          </div>

          {/* Time Slots */}
          <div className="grid grid-cols-8 gap-1">
            {/* 9:00 Row */}
            <div className="p-4 flex items-center">09:00</div>
            <ClassBlock type={classTypes.morningFlow} time="09:00 - 10:00" instructor="Lily Carter" />
            <ClassBlock type={classTypes.kundalini} time="09:00 - 10:00" instructor="Grace Dean" />
            <ClassBlock type={classTypes.morningFlow} time="09:00 - 10:00" instructor="Lily Carter" />
            <ClassBlock type={classTypes.kundalini} time="09:00 - 10:00" instructor="Grace Dean" />
            <ClassBlock type={classTypes.morningFlow} time="09:00 - 10:00" instructor="Lily Carter" />
            <ClassBlock type={classTypes.kundalini} time="09:00 - 10:00" instructor="Grace Dean" />
            <ClassBlock type={classTypes.morningFlow} time="09:00 - 10:00" instructor="Lily Carter" />

            {/* 10:00 Row */}
            <div className="p-4 flex items-center">10:00</div>
            <ClassBlock type={classTypes.ashtanga} time="10:00 - 11:00" instructor="Sophia Keat" />
            <div className="bg-gray-50"></div>
            <ClassBlock type={classTypes.ashtanga} time="10:00 - 11:00" instructor="Sophia Keat" />
            <div className="bg-gray-50"></div>
            <ClassBlock type={classTypes.ashtanga} time="10:00 - 11:00" instructor="Sophia Keat" />
            <div className="bg-gray-50"></div>
            <ClassBlock type={classTypes.ashtanga} time="10:00 - 11:00" instructor="Sophia Keat" />

            {/* 11:00 Row */}
            <div className="p-4 flex items-center">11:00</div>
            <ClassBlock type={classTypes.kundalini} time="11:00 - 12:00" instructor="Grace Dean" />
            <ClassBlock type={classTypes.yogaDance} time="11:00 - 12:00" instructor="Daniel Brooks" />
            <div className="bg-gray-50"></div>
            <ClassBlock type={classTypes.yogaDance} time="11:00 - 12:00" instructor="Daniel Brooks" />
            <div className="bg-gray-50"></div>
            <ClassBlock type={classTypes.yogaDance} time="11:00 - 12:00" instructor="Daniel Brooks" />
            <ClassBlock type={classTypes.kundalini} time="11:00 - 12:00" instructor="Grace Dean" />

            {/* 12:00 Row */}
            <div className="p-4 flex items-center">12:00</div>
            <ClassBlock type={classTypes.hatha} time="12:00 - 13:00" instructor="Mary Sheldon" />
            <div className="bg-gray-50"></div>
            <ClassBlock type={classTypes.hatha} time="12:00 - 13:00" instructor="Mary Sheldon" />
            <div className="bg-gray-50"></div>
            <ClassBlock type={classTypes.hatha} time="12:00 - 13:00" instructor="Mary Sheldon" />
            <div className="bg-gray-50"></div>
            <ClassBlock type={classTypes.hatha} time="12:00 - 13:00" instructor="Mary Sheldon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timetable;