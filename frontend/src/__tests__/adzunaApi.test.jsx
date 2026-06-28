import { describe, test, expect, vi } from "vitest";
import axios from "axios";
import { fetchJobListings } from "../api/adzunaApi";

vi.mock("axios");

describe("fetchJobListings", () => {
  test("returns job listings successfully", async () => {
    const mockData = {
      results: [
        {
          id: 1,
          title: "Frontend Developer",
        },
      ],
    };

    axios.get.mockResolvedValue({
      data: mockData,
    });

    const result = await fetchJobListings("React", "Pune");

    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalled();
  });
});