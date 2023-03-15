//
//  DailyScrum.swift
//  Scrumdinger
//
//  Created by Margaret on 3/15/23.
//

import Foundation

struct DailyScrum {
    var title: String
    var attendees: [String]
    var lengthInMinutes: Int
    var theme: Theme
}

extension DailyScrum {
    static let sampleData: [DailyScrum] =
    [
        DailyScrum(title: "Design", attendees: ["Margaret", "Will", "Natasha", "Sabrina"], lengthInMinutes: 10, theme: .seafoam),
        DailyScrum(title: "Dev", attendees: ["Margaret", "Luis", "Darla", "Chad", "Jean", "Jeremy", "Timothy"], lengthInMinutes: 15, theme: .teal),
        DailyScrum(title: "Strategy", attendees: ["Emma", "Eleanor", "Rafe"], lengthInMinutes: 5, theme: .navy)
    ]
}
