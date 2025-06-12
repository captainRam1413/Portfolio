import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";

function LeetCodeStats() {
  const [data, setData] = useState(null);
  const username = "captainRam0001"; // 🔁 Replace with your LeetCode username

  useEffect(() => {
    axios
      .get(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching LeetCode data", err);
      });
  }, [username]);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">LeetCode</strong> Stats
      </h1>
      {data ? (
        <Col md={6}>
          <Card className="p-3 text-center">
            <Card.Body>
              <Card.Title>Username: <strong>{data.username}</strong></Card.Title>
              <Card.Text>
                ⭐ Total Solved: <strong>{data.totalSolved}</strong><br />
                📊 Ranking: <strong>{data.ranking}</strong><br />
                🟨 Easy: <strong>{data.easySolved}</strong> / {data.totalEasy}<br />
                🟧 Medium: <strong>{data.mediumSolved}</strong> / {data.totalMedium}<br />
                🟥 Hard: <strong>{data.hardSolved}</strong> / {data.totalHard}<br />
                📈 Contribution Points: <strong>{data.contributionPoints}</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        <p>Loading...</p>
      )}
    </Row>
  );
}

export default LeetCodeStats;
