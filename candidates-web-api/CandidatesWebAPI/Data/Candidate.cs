﻿namespace CandidatesWebAPI.Data
{
    public class Candidate
    {
        public int Id { get; set; }
        public string? FullName { get; set; }
        public string? Email { get; set; }
        public string? Skills { get; set; }
        public int YrsExp { get; set; }

    }
}