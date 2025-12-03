import { useState } from "react";
import { Plus, Edit, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { cleaningTeams } from "@/lib/mockData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CleaningTeams() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTeam, setEditingTeam] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    teamLead: "",
    teamSize: "",
    status: "ACTIVE",
  });

  const handleOpenModal = (team) => {
    if (team) {
      setEditingTeam(team);
      setFormData({
        name: team.name,
        teamLead: team.teamLead,
        teamSize: team.teamSize.toString(),
        status: team.status,
      });
    } else {
      setEditingTeam(null);
      setFormData({ name: "", teamLead: "", teamSize: "", status: "ACTIVE" });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Cleaning Teams
          </h1>
          <p className="text-muted-foreground">
            Manage your cleaning teams and assignments
          </p>
        </div>
        <Button variant="accent" onClick={() => handleOpenModal()}>
          <Plus className="mr-2 h-4 w-4" /> Create New Team
        </Button>
      </div>

      {/* Teams Table */}
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <th className="px-4 py-3">Team Name</th>
              <th className="px-4 py-3">Team Lead</th>
              <th className="px-4 py-3">Team Size</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Current Load</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {cleaningTeams.map((team) => (
              <tr key={team.id} className="hover:bg-muted/30">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-medium">{team.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-muted-foreground">
                  {team.teamLead}
                </td>
                <td className="px-4 py-4 text-sm text-muted-foreground">
                  {team.teamSize} members
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={team.status} />
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-accent"
                        style={{ width: `${(team.currentLoad / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {team.currentLoad} bookings
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleOpenModal(team)}
                  >
                    <Edit className="mr-1 h-3 w-3" /> Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingTeam ? "Edit Team" : "Create New Team"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Team Name</Label>
              <Input
                id="name"
                placeholder="Alpha Team"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="teamLead">Team Lead</Label>
              <Input
                id="teamLead"
                placeholder="John Smith"
                value={formData.teamLead}
                onChange={(e) =>
                  setFormData({ ...formData, teamLead: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="teamSize">Team Size</Label>
              <Input
                id="teamSize"
                type="number"
                placeholder="5"
                value={formData.teamSize}
                onChange={(e) =>
                  setFormData({ ...formData, teamSize: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData({ ...formData, status: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ACTIVE">Active</SelectItem>
                  <SelectItem value="INACTIVE">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" variant="accent">
                {editingTeam ? "Save Changes" : "Create Team"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
